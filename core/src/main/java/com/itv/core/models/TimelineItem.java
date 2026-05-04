package com.itv.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class TimelineItem {

    @ValueMapValue
    private String date;

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String description;

    public String getDate() {
        return date;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }
}