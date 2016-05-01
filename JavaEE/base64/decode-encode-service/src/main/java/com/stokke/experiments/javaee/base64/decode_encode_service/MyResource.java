package com.stokke.experiments.javaee.base64.decode_encode_service;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.POST;

import org.glassfish.jersey.internal.util.Base64;

import com.stokke.experiments.javaee.base64.decode_encode_service.beans.ConversionBean;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("base64")
public class MyResource {

    /**
     * Method handling HTTP GET requests. The returned object will be sent
     * to the client as "text/plain" media type.
     *
     * @return String that will be returned as a text/plain response.
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
        return "Got it!";
    }
    
    @POST
    @Path("encode")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public ConversionBean base64Encode(@FormParam("input") String input) {
    	ConversionBean c = new ConversionBean();
    	c.setInput(input);
    	c.setOutput(Base64.encodeAsString(input.getBytes()));
    	return c;
    }
    
    @POST
    @Path("decode")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public ConversionBean base64Decode(@FormParam("input") String input) {
    	ConversionBean c = new ConversionBean();
    	c.setInput(input);
    	c.setOutput(Base64.decodeAsString(input));
    	return c;
    }
    
}
