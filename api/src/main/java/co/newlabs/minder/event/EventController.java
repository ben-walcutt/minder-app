package co.newlabs.minder.event;

import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import lombok.AllArgsConstructor;

import java.util.List;

@Controller
@AllArgsConstructor
public class EventController {

    private EventService eventService;

    @Get(uri = "/events", produces = MediaType.APPLICATION_JSON)
    public List<EventDTO> getAllEventsForUser(@QueryValue String userId) {
        return eventService.getAllEventsForUser(userId);
    }

    @Post(uri = "/events", produces = MediaType.APPLICATION_JSON)
    public Event createTask(@Body EventCreateDTO eventCreateDTO) {
        return eventService.createEvent(eventCreateDTO);
    }
}
