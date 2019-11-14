package co.newlabs.minder.event;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventCreateDTO {
    private String creator;
    private String title;
    private LocalDateTime startTimestamp;
    private LocalDateTime endTimestamp;
}
