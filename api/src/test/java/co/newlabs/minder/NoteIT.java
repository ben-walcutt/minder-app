package co.newlabs.minder;

import co.newlabs.minder.note.Note;
import co.newlabs.minder.note.NoteDTO;
import co.newlabs.minder.note.NoteRepository;
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
import java.util.List;

import static io.restassured.RestAssured.given;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@MicronautTest
public class NoteIT {

    @Inject
    private EmbeddedServer server;

    @Inject
    private NoteRepository noteRepository;

    @Inject
    private ObjectMapper objectMapper;

    @BeforeEach
    public void beforeEach() {
        noteRepository.deleteAll();
    }

    @Test
    public void testGetNotesForUser() throws IOException {
        //ARRANGE
        String requestBody = new String(Files.readAllBytes(Paths.get("src/test/resources/json/note/note.json")));

        given()
                .log().all()
                .contentType("application/json")
                .body(requestBody)
                .when()
                .port(server.getPort())
                .post("/notes");

        //ACT
        Response response = given()
                                .log().all()
                                .queryParam("userId", "author")
                            .when()
                            .port(server.getPort())
                            .get("/notes");

        //ASSERT
        assertThat(response.getStatusCode(), is(200));
        System.out.println(response.asString());
        List<NoteDTO> notes = objectMapper.readValue(response.asString(), new TypeReference<List<NoteDTO>>(){});
        assertThat(notes.size(), is(1));
        assertThat(notes.get(0).getAuthor(), is("author"));
    }

    @Test
    public void testCreateNote() throws IOException {
        //ARRANGE
        String requestBody = new String(Files.readAllBytes(Paths.get("src/test/resources/json/note/note.json")));

        //ACT
        Response response = given()
                                .log().all()
                                .contentType("application/json")
                                .body(requestBody)
                            .when()
                                .port(server.getPort())
                                .post("/notes");

        //ASSERT
        assertThat(response.getStatusCode(), is(200));
        Note expected = Note.builder()
                .author("author")
                .text("text")
                .title("title")
                .build();
        Note actual = response.as(Note.class);
        assertThat(actual.getAuthor(), is(expected.getAuthor()));
        assertThat(actual.getText(), is(expected.getText()));
        assertThat(actual.getTitle(), is(expected.getTitle()));
    }

}
