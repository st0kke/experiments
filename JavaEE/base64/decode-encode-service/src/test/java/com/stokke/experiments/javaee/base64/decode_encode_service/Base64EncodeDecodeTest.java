package com.stokke.experiments.javaee.base64.decode_encode_service;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.Form;

import org.apache.commons.codec.binary.Base64;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.glassfish.jersey.test.TestProperties;

import static org.hamcrest.CoreMatchers.*;

import org.junit.Test;

import static org.junit.Assert.*;

import com.stokke.experiments.javaee.base64.decode_encode_service.beans.ConversionBean;

public class Base64EncodeDecodeTest extends JerseyTest 	{

	final String TO_BE_ENCODED = "the input string";
	final String ENCODED_RESULT = Base64.encodeBase64String(TO_BE_ENCODED.getBytes());
	
	@Test
	public void testFormEncode() throws Exception {
		Form form = new Form().param("input", TO_BE_ENCODED);
		
		Entity<Form> entity = Entity.form(form);
		
		ConversionBean conversion = target("base64/encode").request().post(entity, ConversionBean.class);
		
		assertThat(conversion.getInput(), is(TO_BE_ENCODED));
		assertThat(conversion.getOutput(), is(Base64.encodeBase64String(TO_BE_ENCODED.getBytes())));
		
	}
	
	@Test
	public void testFormDecode() throws Exception {
		Form form = new Form().param("input", ENCODED_RESULT);
		Entity<Form> entity = Entity.form(form);
		ConversionBean conversion = target("base64/decode").request().post(entity, ConversionBean.class);
		
		assertThat(conversion.getInput(), is(ENCODED_RESULT));
		assertThat(conversion.getOutput(), is(TO_BE_ENCODED));
	}
	
    @Override
    protected Application configure() {
        set(TestProperties.LOG_TRAFFIC, true);
        set(TestProperties.DUMP_ENTITY, true);
        return new ResourceConfig(Base64Resource.class);
    }
}
