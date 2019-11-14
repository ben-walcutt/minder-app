package co.newlabs.minder.event;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
    private Integer id;
    private String creator;
    private String title;
    private LocalDateTime startTimestamp;
    private LocalDateTime endTimestamp;
    private LocalDateTime createdTimestamp;
    private LocalDateTime lastUpdatedTimestamp;

    public EventDTO(Event event) {
        this.id = event.getId();
        this.creator = event.getCreator();
        this.title = event.getTitle();
        this.startTimestamp = event.getStartTimestamp();
        this.endTimestamp = event.getEndTimestamp();
        this.createdTimestamp = event.getCreatedTimestamp();
        this.lastUpdatedTimestamp = event.getLastUpdatedTimestamp();
    }
}
