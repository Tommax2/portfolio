import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../img/contact.jpeg";
import { motion } from "framer-motion";

export const Contact = () => {
  const FormInitialDetails = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(FormInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({});

  // Wake up the server when the component mounts
  useEffect(() => {
    const wakeUpServer = async () => {
      try {
        const apiUrl =
          window.location.hostname === "localhost"
            ? "http://localhost:5000/ping"
            : "/ping";
        await fetch(apiUrl);
        console.log("Server wake-up ping sent");
      } catch (err) {
        console.log("Server wake-up ping failed (expected if server is down)");
      }
    };
    wakeUpServer();
  }, []);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // Check if server is ready with short timeout
  const checkServerReady = async () => {
    try {
      const apiUrl =
        window.location.hostname === "localhost"
          ? "http://localhost:5000/ping"
          : "/ping";
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second check
      
      const response = await fetch(apiUrl, { signal: controller.signal });
      clearTimeout(timeoutId);
      
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formDetails.email || !formDetails.message) {
      setStatus({
        success: false,
        message: "Please fill in all required fields.",
      });
      return;
    }

    setButtonText("Checking server...");
    setIsSending(true);
    setStatus({});

    // Poll server until it's ready (max 2 minutes)
    const maxPollingTime = 120000; // 2 minutes
    const pollInterval = 5000; // Check every 5 seconds
    const startTime = Date.now();
    let serverReady = false;
    let pollCount = 0;

    while (Date.now() - startTime < maxPollingTime && !serverReady) {
      pollCount++;
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setButtonText(`Waking server... ${elapsed}s`);
      setStatus({
        success: null,
        message: `Checking server status... (attempt ${pollCount})`
      });
      
      serverReady = await checkServerReady();
      
      if (!serverReady && Date.now() - startTime < maxPollingTime) {
        await new Promise(resolve => setTimeout(resolve, pollInterval));
      }
    }

    if (!serverReady) {
      setButtonText("Send");
      setIsSending(false);
      setStatus({
        success: false,
        message: "Server is taking too long to wake up. Please try again in a minute. (Render free tier needs time to start)",
      });
      return;
    }

    // Server is ready, now send the actual message
    const sendMessage = async (attempt = 1, maxAttempts = 3) => {
      try {
        setButtonText(`Sending... (${attempt}/${maxAttempts})`);
        setStatus({
          success: null,
          message: `Sending your message... (attempt ${attempt})`
        });

        const apiUrl =
          window.location.hostname === "localhost"
            ? "http://localhost:5000/contact"
            : "/contact";

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDetails),
        });

        const result = await response.json();
        
        setButtonText("Send");
        setIsSending(false);

        if (response.ok) {
          setFormDetails(FormInitialDetails);
          setStatus({ success: true, message: "Message sent successfully!" });
        } else {
          setStatus({
            success: false,
            message: result.message || "Server error. Please try again later.",
          });
        }
      } catch (error) {
        console.error(`Error sending message (attempt ${attempt}):`, error);
        
        // Retry if we haven't exhausted attempts
        if (attempt < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, 3000)); // Wait 3s before retry
          return sendMessage(attempt + 1, maxAttempts);
        }
        
        // All attempts failed
        setButtonText("Send");
        setIsSending(false);
        
        setStatus({
          success: false,
          message: "Failed to send message after multiple attempts. The server may be overloaded. Please try again in a moment.",
        });
      }
    };

    await sendMessage();
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={contactImg} alt="Contact Us" />
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Let's Collaborate</h2>
              <p className="mb-4">
                Have a project in mind or just want to say hi? My inbox is
                always open. I'll get back to you as soon as possible!
              </p>
              <form onSubmit={handleSubmit}>
                <Row className="mt-3">
                  <Col md={6}>
                    <input
                      type="text"
                      value={formDetails.firstname}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstname", e.target.value)
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <input
                      type="text"
                      value={formDetails.lastname}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastname", e.target.value)}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12}>
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12}>
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone Number"
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12}>
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12}>
                    <button type="submit" disabled={isSending}>
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>

                {status.message && (
                  <Row className="mt-3">
                    <Col md={12}>
                      <p
                        className={
                          status.success === false ? "danger" : 
                          status.success === true ? "success" : 
                          "info"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  </Row>
                )}
              </form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
