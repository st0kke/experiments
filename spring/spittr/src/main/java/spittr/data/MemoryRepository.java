package spittr.data;

import org.springframework.stereotype.Component;
import spittr.Spittle;

import java.util.List;

@Component
public class MemoryRepository implements SpittleRepository {

    @Override
    public List<Spittle> findSpittles(long max, int count) {
        return null;
    }
}
