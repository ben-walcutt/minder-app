package co.newlabs.minder.note;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "Note")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @NotNull
    private String title;

    @Column
    @NotNull
    private String text;

    @Column
    @NotNull
    private String author;

    @Column
    @NotNull
    private LocalDateTime createDateTime;

    @Column
    @NotNull
    private LocalDateTime lastUpdatedDateTime;
}