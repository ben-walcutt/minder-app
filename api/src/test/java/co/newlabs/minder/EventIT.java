package co.newlabs.minder;

import co.newlabs.minder.event.Event;
import co.newlabs.minder.event.EventDTO;
import co.newlabs.minder.event.EventRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.micronaut.runtime.server.EmbeddedServer;
import io.micronaut.test.annotation.MicronautTest;
import io.restassured.response.Response;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static io.restassured.RestAssured.given;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@MicronautTest
public class EventIT {

    @Inject
    private EmbeddedServer server;

    @Inject
    private EventRepository eventRepository;

    @Inject
    private ObjectMapper objectMapper;

    @BeforeEach
    public void beforeEach() {
        eventRepository.deleteAll();
    }

    @Test
    public void testGetTasksForUser() throws IOException {
        //ARRANGE
        String requestBody = new String(Files.readAllBytes(Paths.get("src/test/resources/json/event/event.json")));

        given()
                .log().all()
                .contentType("application/json")
                .body(requestBody)
                .when()
                .port(server.getPort())
                .post("/events");

        //ACT
        Response response = given()
                                .log().all()
                                .queryParam("userId", "author")
                            .when()
                            .port(server.getPort())
                            .get("/events");

        //ASSERT
        assertThat(response.getStatusCode(), is(200));
        List<EventDTO> eventDTOS = objectMapper.readValue(response.asString(), new TypeReference<List<EventDTO>>(){});
        assertThat(eventDTOS.size(), is(1));
        EventDTO expected = EventDTO.builder()
                .creator("creator")
                .title("title")
                .startTimestamp(LocalDateTime.from(DateTimeFormatter.ISO_LOCAL_DATE_TIME.parse("2019-01-02T03:04:05.06")))
                .endTimestamp(LocalDateTime.from(DateTimeFormatter.ISO_LOCAL_DATE_TIME.parse("2019-02-02T03:04:05.06")))
                .build();
        EventDTO actual = eventDTOS.get(0);
        assertThat(actual.getCreator(), is(expected.getCreator()));
        assertThat(actual.getTitle(), is(expected.getTitle()));
        assertThat(actual.getEndTimestamp(), is(expected.getEndTimestamp()));
        assertThat(actual.getStartTimestamp(), is(expected.getStartTimestamp()));
    }

    @Test
    public void testCreateTask() throws IOException {
        //ARRANGE
        String requestBody = new String(Files.readAllBytes(Paths.get("src/test/resources/json/event/event.json")));

        //ACT
        Response response = given()
                                .log().all()
                                .contentType("application/json")
                                .body(requestBody)
                            .when()
                                .port(server.getPort())
                                .post("/events");

        //ASSERT
        assertThat(response.getStatusCode(), is(200));
        Event expected = Event.builder()
                .creator("creator")
                .title("title")
                .startTimestamp(LocalDateTime.from(DateTimeFormatter.ISO_LOCAL_DATE_TIME.parse("2019-01-02T03:04:05.06")))
                .endTimestamp(LocalDateTime.from(DateTimeFormatter.ISO_LOCAL_DATE_TIME.parse("2019-02-02T03:04:05.06")))
                .build();
        Event actual = response.as(Event.class);
        assertThat(actual.getCreator(), is(expected.getCreator()));
        assertThat(actual.getTitle(), is(expected.getTitle()));
        assertThat(actual.getStartTimestamp(), is(expected.getStartTimestamp()));
        assertThat(actual.getEndTimestamp(), is(expected.getEndTimestamp()));
    }

}
