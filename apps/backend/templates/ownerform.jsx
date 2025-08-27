const React = require('react');
const { Html, Head, Preview, Body, Container, Section, Heading, Text } = require('@react-email/components');

export default function OwnerEmail({ name, email, message }) {
  return (
    <Html>
      <Head />
      <Preview>New contact form message from {name}</Preview>
      <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f6f9fc', margin: 0, padding: 0 }}>
        <Container style={{ backgroundColor: '#ffffff', margin: '20px auto', padding: '20px', borderRadius: '5px' }}>
          <Section>
            <Heading style={{ color: '#2d3748' }}>New Contact Message Received</Heading>
            <Text style={{ fontSize: '16px', color: '#4a5568' }}>
              You have received a new message through the Farmloc contact form.
            </Text>
          </Section>

          <Section>
            <Heading style={{ fontSize: '18px', color: '#2b6cb0' }}>Sender Details:</Heading>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
          </Section>

          <Section>
            <Heading style={{ fontSize: '18px', color: '#2b6cb0' }}>Message:</Heading>
            <Text style={{ whiteSpace: 'pre-line' }}>{message}</Text>
          </Section>

          <Section>
            <Text style={{ fontSize: '14px', color: '#718096' }}>
              This message was sent from the Farmloc website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
