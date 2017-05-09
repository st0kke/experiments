import org.junit.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.servlet.view.InternalResourceView;
import spittr.Spittle;
import spittr.web.SpittleController;
import spittr.data.SpittleRepository;
import spittr.web.HomeController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

public class HomeControllerTest {

    @Test
    public void testHomePage() throws Exception {
        HomeController controller = new HomeController();
        MockMvc mockMvc = standaloneSetup(controller).build();
        mockMvc.perform(get("/")).andExpect(view().name("home"));
    }

    @Test
    public void shouldShowRecentSpittles() throws Exception {

        List<Spittle> expectedSpittles = createSpittleList(20);
        SpittleRepository mockRepository = mock(SpittleRepository.class);
        when(mockRepository.findSpittles(Long.MAX_VALUE, 20)).thenReturn(expectedSpittles);


        SpittleController spittleController = new SpittleController(mockRepository);

        MockMvc mockMvc = standaloneSetup(spittleController).setSingleView(
                new InternalResourceView(("/WEB-INF/views/spittles.jsp"))
        ).build();

        mockMvc.perform(get("/spittles"))
                .andExpect(view().name("spittles"))
                .andExpect(model().attributeExists("spittleList"))
                .andExpect(model().attribute("spittleList", hasItems(expectedSpittles.toArray())));
    }

    private List<Spittle> createSpittleList(final int size) {

        List<Spittle> data = new ArrayList<>(size);
        for (int i=0;i<size;i++) {
            Spittle spittle = new Spittle("Spittle " + i, new Date());
            data.add(spittle);
        }

        return data;

    }
}
