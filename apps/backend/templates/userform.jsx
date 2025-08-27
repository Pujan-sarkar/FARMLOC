const React = require('react');
const { Html, Head, Preview, Body, Container, Section, Heading, Text } = require('@react-email/components');

export default function UserEmail({ name }) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Farmloc</Preview>
      <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f6f9fc', margin: 0, padding: 0 }}>
        <Container style={{ backgroundColor: '#ffffff', margin: '20px auto', padding: '20px', borderRadius: '5px' }}>
          <Section>
            <Heading style={{ color: '#2d3748' }}>Thank you for reaching out to Farmloc!</Heading>
            <Text style={{ fontSize: '16px', color: '#4a5568' }}>
              Hi {name},
            </Text>
            <Text style={{ fontSize: '16px', color: '#4a5568', marginTop: '10px' }}>
              We have received your message and appreciate you taking the time to contact us.
            </Text>
            <Text style={{ fontSize: '16px', color: '#4a5568' }}>
              Our team at Farmloc will review your inquiry and get back to you as soon as possible.
            </Text>
          </Section>

          <Section>
            <Text style={{ fontSize: '14px', color: '#718096' }}>
              If you have any additional questions, feel free to reply to this email.
            </Text>
          </Section>

          <Section>
            <Text style={{ fontSize: '14px', color: '#a0aec0' }}>
              Thank you for choosing Farmloc.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
