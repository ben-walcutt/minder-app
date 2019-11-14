package co.newlabs.minder.note;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NoteDTO {
    private int id;
    private String author;
    private String text;
    private String title;
    private LocalDateTime createdTimestamp;
    private LocalDateTime lastUpdatedTimestamp;

    public NoteDTO(Note note) {
        this.id = note.getId();
        this.author = note.getAuthor();
        this.text = note.getText();
        this.title = note.getTitle();
        this.createdTimestamp = note.getCreateDateTime();
        this.lastUpdatedTimestamp = note.getLastUpdatedDateTime();
    }
}
