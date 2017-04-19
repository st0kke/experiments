package com.st0kke.experiments.messaging;

import javax.jms.Connection;
import javax.jms.ConnectionFactory;
import javax.jms.DeliveryMode;
import javax.jms.Destination;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageConsumer;
import javax.jms.MessageProducer;
import javax.jms.Session;
import javax.jms.TextMessage;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.naming.ldap.BasicControl;

import org.apache.activemq.ActiveMQConnectionFactory;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	 try {
    		 JNDIProducer();
         }
         catch (Exception e) {
             System.out.println("Caught: " + e);
             e.printStackTrace();
         }
    }
	
	private static void JNDIProducer() throws NamingException, JMSException {
		  // Obtain a JNDI connection
		  InitialContext jndi = new InitialContext();

		  // Look up a JMS connection factory
		  ConnectionFactory conFactory = (ConnectionFactory) jndi
		    .lookup("TopicCF");
		  Connection connection;

		  // Getting JMS connection from the server and starting it
		  connection = conFactory.createConnection();
		  try {
		   connection.start();

		   // JMS messages are sent and received using a Session. We will
		   // create here a non-transactional session object. If you want
		   // to use transactions you should set the first parameter to 'true'
		   Session session = connection.createSession(false,
		     Session.AUTO_ACKNOWLEDGE);

		   Destination destination = (Destination) jndi.lookup("MyQueue");

		   // MessageProducer is used for sending messages (as opposed
		   // to MessageConsumer which is used for receiving them)
		   MessageProducer producer = session.createProducer(destination);
		   
		   // We will send a small text message saying 'Hello World!'
		   TextMessage message = session.createTextMessage("Hello World!");

		   // Here we are sending the message!
		   producer.send(message);
		   System.out.println("Sent message '" + message.getText() + "'");
		  } finally {
		   connection.close();
		  }
	
	}

	private static void nonJNDIProducer() throws JMSException {
		// Create a ConnectionFactory
		 ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory("vm://localhost");

		 // Create a Connection
		 Connection connection = connectionFactory.createConnection();
		 connection.start();

		 // Create a Session
		 Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);

		 // Create the destination (Topic or Queue)
		 Destination destination = session.createQueue("test");

		// Destination destination = session.
		 
		 // Create a MessageProducer from the Session to the Topic or Queue
		 MessageProducer producer = session.createProducer(destination);
		 producer.setDeliveryMode(DeliveryMode.NON_PERSISTENT);

		 // Create a messages
		 String text = "Hello world! From: " + Thread.currentThread().getName() + " : ";
		 TextMessage message = session.createTextMessage(text);

		 // Tell the producer to send the message
		 System.out.println("Sent message: "+ message.hashCode() + " : " + Thread.currentThread().getName());
		 producer.send(message);

		 // Clean up
		 session.close();
		 connection.close();
	}
    
    public static void NonJNDIConsumer() {
    	   try {
    		   
               // Create a ConnectionFactory
               ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory("vm://localhost");

               // Create a Connection
               Connection connection = connectionFactory.createConnection();
               connection.start();

         //      connection.setExceptionListener(this);

               // Create a Session
               Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);

               // Create the destination (Topic or Queue)
               Destination destination = session.createQueue("test");

               // Create a MessageConsumer from the Session to the Topic or Queue
               MessageConsumer consumer = session.createConsumer(destination);

               // Wait for a message
               Message message = consumer.receive(1000);

               if (message instanceof TextMessage) {
                   TextMessage textMessage = (TextMessage) message;
                   String text = textMessage.getText();
                   System.out.println("Received: " + text);
               } else {
                   System.out.println("Received: " + message);
               }

               consumer.close();
               session.close();
               connection.close();
           } catch (Exception e) {
               System.out.println("Caught: " + e);
               e.printStackTrace();
           }
       }	
    }
    
    
