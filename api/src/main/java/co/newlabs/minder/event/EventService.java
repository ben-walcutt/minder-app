package co.newlabs.minder.event;

import lombok.AllArgsConstructor;

import javax.inject.Singleton;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Singleton
@AllArgsConstructor
public class EventService {

    private EventRepository eventRepository;

    public List<EventDTO> getAllEventsForUser(String userId) {
        List<Event> events = eventRepository.findAll();
        List<EventDTO> eventDTOS = new ArrayList<>();
        for (Event event : events) {
            eventDTOS.add(new EventDTO(event));
        }
        return eventDTOS;
    }

    public Event createEvent(EventCreateDTO eventCreateDTO) {
        Event task = Event.builder()
                .creator(eventCreateDTO.getCreator())
                .title(eventCreateDTO.getTitle())
                .startTimestamp(eventCreateDTO.getStartTimestamp())
                .endTimestamp(eventCreateDTO.getEndTimestamp())
                .createdTimestamp(LocalDateTime.now())
                .lastUpdatedTimestamp(LocalDateTime.now())
                .build();

        return eventRepository.save(task);
    }
}
