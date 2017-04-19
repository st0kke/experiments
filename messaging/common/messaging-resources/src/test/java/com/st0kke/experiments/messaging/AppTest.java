package com.st0kke.experiments.messaging;

import java.io.IOException;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;

import com.google.common.io.ByteStreams;
import com.st0kke.messaging.demo.CSEDwrapper;
import com.st0kke.messaging.demo.Metadata;
import com.st0kke.messaging.demo.Structured;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */
public class AppTest extends TestCase {
	/**
	 * Create the test case
	 *
	 * @param testName
	 *            name of the test case
	 */
	public AppTest(String testName) {
		super(testName);
	}

	/**
	 * @return the suite of tests being tested
	 */
	public static Test suite() {
		return new TestSuite(AppTest.class);
	}

	/**
	 * Rigourous Test :-)
	 */
	public void testApp() {
		Metadata md = new Metadata();
		md.setBillNumber("12345");
		md.setBookingRefNumber("6789");
		md.setImageType("Approval");
		md.setShippingNumber("s12345");
		md.setGscName("BOM");
		md.setFileType(".txt");

		Structured structured = new Structured();
		structured.setMetadata(md);
		structured.setSixml(getSiXML());
		structured.setTelex(getTelex());
		
		CSEDwrapper wrap = new CSEDwrapper();
		wrap.setEdi(structured);
		
		try {
			JAXBContext ctx = JAXBContext.newInstance(CSEDwrapper.class);
			Marshaller jaxbMarshaller = ctx.createMarshaller();
			 
			jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
			 
			jaxbMarshaller.marshal(wrap, System.out);
	 
		} catch (JAXBException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	private byte[] getTelex() {
		try {
			return ByteStreams.toByteArray(this.getClass().getResourceAsStream(
					"/telex1.txt"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	private byte[] getSiXML() {
		try {
			return ByteStreams.toByteArray(this.getClass().getResourceAsStream(
					"/ESPXML_XMLSI_EXAMPLE.XML"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
}
