//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.7 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2015.05.17 at 10:20:21 AM CEST 
//


package com.st0kke.messaging.demo;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for Structured complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="Structured">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="sixml" type="{http://www.maersk.com/csed/2015/05/csedwrapper}Payload"/>
 *         &lt;element name="telex" type="{http://www.maersk.com/csed/2015/05/csedwrapper}Payload"/>
 *         &lt;element name="metadata" type="{http://www.maersk.com/csed/2015/05/csedwrapper}Metadata" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Structured", propOrder = {
    "sixml",
    "telex",
    "metadata"
})
public class Structured {

    @XmlElement(namespace = "http://www.maersk.com/csed/2015/05/csedwrapper", required = true)
    protected byte[] sixml;
    @XmlElement(namespace = "http://www.maersk.com/csed/2015/05/csedwrapper", required = true)
    protected byte[] telex;
    @XmlElement(namespace = "http://www.maersk.com/csed/2015/05/csedwrapper")
    protected Metadata metadata;

    /**
     * Gets the value of the sixml property.
     * 
     * @return
     *     possible object is
     *     byte[]
     */
    public byte[] getSixml() {
        return sixml;
    }

    /**
     * Sets the value of the sixml property.
     * 
     * @param value
     *     allowed object is
     *     byte[]
     */
    public void setSixml(byte[] value) {
        this.sixml = value;
    }

    /**
     * Gets the value of the telex property.
     * 
     * @return
     *     possible object is
     *     byte[]
     */
    public byte[] getTelex() {
        return telex;
    }

    /**
     * Sets the value of the telex property.
     * 
     * @param value
     *     allowed object is
     *     byte[]
     */
    public void setTelex(byte[] value) {
        this.telex = value;
    }

    /**
     * Gets the value of the metadata property.
     * 
     * @return
     *     possible object is
     *     {@link Metadata }
     *     
     */
    public Metadata getMetadata() {
        return metadata;
    }

    /**
     * Sets the value of the metadata property.
     * 
     * @param value
     *     allowed object is
     *     {@link Metadata }
     *     
     */
    public void setMetadata(Metadata value) {
        this.metadata = value;
    }

}