package co.newlabs.minder.note;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NoteCreateDTO {
    private String author;
    private String text;
    private String title;
}
