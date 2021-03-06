package co.newlabs.minder.note;

import lombok.AllArgsConstructor;

import javax.inject.Singleton;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Singleton
@AllArgsConstructor
public class NoteService {

    private NoteRepository noteRepository;

    public List<NoteDTO> getAllNotesForUser(String userId) {
        List<Note> notes = noteRepository.findAll();
        List<NoteDTO> noteDTOS = new ArrayList<>();
        for (Note note : notes) {
            noteDTOS.add(new NoteDTO(note));
        }
        return noteDTOS;
    }

    public Note createNote(CreateNoteDTO createNoteDTO) {
        Note note = Note.builder()
                .author(createNoteDTO.getAuthor())
                .title(createNoteDTO.getTitle())
                .text(createNoteDTO.getText())
                .createDateTime(LocalDateTime.now())
                .lastUpdatedDateTime(LocalDateTime.now())
                .build();

        return noteRepository.save(note);
    }
}
