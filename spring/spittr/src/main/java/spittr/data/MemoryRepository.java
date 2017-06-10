package spittr.data;

import org.springframework.stereotype.Repository;
import spittr.Spittle;

import java.util.*;

@Repository
public class MemoryRepository implements SpittleRepository {

    private static List<Spittle> spittleList = new ArrayList<>();

    static {
        Spittle s1 = new Spittle(1L, "this is message 1", new Date(), 0.0, 0.0);
        spittleList.add(s1);
    }

    @Override
    public List<Spittle> findSpittles(long max, int count) {
        return Collections.unmodifiableList(spittleList);
    }
}
