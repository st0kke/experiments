package com.stokke.experiments.javaee.base64.decode_encode_service;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.POST;

import com.stokke.experiments.javaee.base64.decode_encode_service.beans.Convert;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("myresource")
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
    public Convert base64Encode(@FormParam("input") String input) {
    	Convert c = new Convert();
    	c.setInput(input);
    	c.setOutput("theoutput");
    	return c;
    }
}
