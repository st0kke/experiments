import org.junit.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.servlet.view.InternalResourceView;
import spittr.Spitter;
import spittr.Spittle;
import spittr.data.SpitterRepository;
import spittr.web.SpitterController;
import spittr.web.SpittleController;
import spittr.data.SpittleRepository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

public class SpitterControllerTest {

    @Test
    public void shouldShowRegistrationForm() throws Exception {
        SpitterRepository mockRepository = mock(SpitterRepository.class);
        SpitterController controller = new SpitterController(mockRepository);

        MockMvc mockMvc = standaloneSetup(controller).build();

        mockMvc.perform(get("/spitter/register"))
                .andExpect(view().name("registerForm"));
    }

    @Test
    public void shouldProcessRegistration() throws Exception {

        SpitterRepository mockRepository = mock(SpitterRepository.class);

        Spitter unsaved = new Spitter("user1", "pass1", "first 1", "last 1", "user1@gmail.com");
        Spitter saved = new Spitter(1L, "user1", "pass1", "first 1", "last 1", "user1@gmail.com");

        when(mockRepository.save(unsaved)).thenReturn(saved);

        SpitterController controller = new SpitterController(mockRepository);
        MockMvc mockMvc = standaloneSetup(controller).build();

        mockMvc.perform(post("/spitter/register")
                .param("firstName", "first 1")
                .param("lastName", "last 1")
                .param("username", "user1")
                .param("password", "pass1"))
                .andExpect(redirectedUrl("/spitter/user1"));

        verify(mockRepository, atLeastOnce()).save(unsaved);

    }

}
