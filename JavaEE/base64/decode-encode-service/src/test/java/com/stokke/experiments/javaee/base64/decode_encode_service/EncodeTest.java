package com.stokke.experiments.javaee.base64.decode_encode_service;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.Form;

import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.glassfish.jersey.test.TestProperties;
import static org.hamcrest.CoreMatchers.*;
import org.junit.Test;
import static org.junit.Assert.*;

import com.stokke.experiments.javaee.base64.decode_encode_service.beans.Convert;

public class EncodeTest extends JerseyTest 	{

	
	@Test
	public void test_form() throws Exception {
		Form form = new Form().param("input", "the data");
		
		Entity<Form> entity = Entity.form(form);
		
		Convert conversion = target("myresource/encode").request().post(entity, Convert.class);
		
		assertThat(conversion.getInput(), is("the data"));
		
	}
	
    @Override
    protected Application configure() {
        set(TestProperties.LOG_TRAFFIC, true);
        set(TestProperties.DUMP_ENTITY, true);
        return new ResourceConfig(MyResource.class);
    }
}
