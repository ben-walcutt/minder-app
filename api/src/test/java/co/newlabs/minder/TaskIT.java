package co.newlabs.minder;

import co.newlabs.minder.task.Task;
import co.newlabs.minder.task.TaskDTO;
import co.newlabs.minder.task.TaskRepository;
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
public class TaskIT {

    @Inject
    private EmbeddedServer server;

    @Inject
    private TaskRepository taskRepository;

    @Inject
    private ObjectMapper objectMapper;

    @BeforeEach
    public void beforeEach() {
        taskRepository.deleteAll();
    }

    @Test
    public void testGetTasksForUser() throws IOException {
        //ARRANGE
        String requestBody = new String(Files.readAllBytes(Paths.get("src/test/resources/json/task/task.json")));

        given()
                .log().all()
                .contentType("application/json")
                .body(requestBody)
                .when()
                .port(server.getPort())
                .post("/tasks");

        //ACT
        Response response = given()
                                .log().all()
                                .queryParam("userId", "author")
                            .when()
                            .port(server.getPort())
                            .get("/tasks");

        //ASSERT
        assertThat(response.getStatusCode(), is(200));

        List<TaskDTO> taskDTOS = objectMapper.readValue(response.asString(), new TypeReference<List<TaskDTO>>(){});
        assertThat(taskDTOS.size(), is(1));

        TaskDTO expected = TaskDTO.builder()
                .author("author")
                .text("text")
                .title("title")
                .completed(false)
                .dueDateTimestamp(LocalDateTime.from(DateTimeFormatter.ISO_LOCAL_DATE_TIME.parse("2019-01-02T03:04:05.06")))
                .build();
        TaskDTO actual = taskDTOS.get(0);
        assertThat(actual.getAuthor(), is(expected.getAuthor()));
        assertThat(actual.getText(), is(expected.getText()));
        assertThat(actual.getTitle(), is(expected.getTitle()));
        assertThat(actual.getDueDateTimestamp(), is(expected.getDueDateTimestamp()));
        assertThat(actual.isCompleted(), is(expected.isCompleted()));
    }

    @Test
    public void testCreateTask() throws IOException {
        //ARRANGE
        String requestBody = new String(Files.readAllBytes(Paths.get("src/test/resources/json/task/task.json")));

        //ACT
        Response response = given()
                                .log().all()
                                .contentType("application/json")
                                .body(requestBody)
                            .when()
                                .port(server.getPort())
                                .post("/tasks");

        //ASSERT
        assertThat(response.getStatusCode(), is(200));
        Task expected = Task.builder()
                .author("author")
                .text("text")
                .title("title")
                .completed(false)
                .dueDateTimestamp(LocalDateTime.from(DateTimeFormatter.ISO_LOCAL_DATE_TIME.parse("2019-01-02T03:04:05.06")))
                .build();
        Task actual = response.as(Task.class);
        assertThat(actual.getAuthor(), is(expected.getAuthor()));
        assertThat(actual.getText(), is(expected.getText()));
        assertThat(actual.getTitle(), is(expected.getTitle()));
        assertThat(actual.getDueDateTimestamp(), is(expected.getDueDateTimestamp()));
        assertThat(actual.isCompleted(), is(expected.isCompleted()));
    }

}
