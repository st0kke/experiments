package spittr.data;

import org.springframework.stereotype.Repository;
import spittr.Spittle;

import java.util.List;

@Repository
public class MemoryRepository implements SpittleRepository {

    @Override
    public List<Spittle> findSpittles(long max, int count) {
        return null;
    }
}
