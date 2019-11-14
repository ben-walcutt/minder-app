package co.newlabs.minder.note;

import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import lombok.AllArgsConstructor;

import java.util.List;

@Controller
@AllArgsConstructor
public class NoteController {

    private NoteService noteService;

    @Get(uri = "/notes", produces = MediaType.APPLICATION_JSON)
    public List<NoteDTO> getAllNotesForUser(@QueryValue String userId) {
        return noteService.getAllNotesForUser(userId);
    }

    @Post(uri = "/notes", produces = MediaType.APPLICATION_JSON)
    public Note createNote(@Body CreateNoteDTO createNoteDTO) {
        return noteService.createNote(createNoteDTO);
    }
}
