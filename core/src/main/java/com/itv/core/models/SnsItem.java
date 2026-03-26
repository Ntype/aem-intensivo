package com.itv.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class SnsItem {

    @ValueMapValue
    private String name;

    @ValueMapValue
    private String icon;

    @ValueMapValue
    private String link;

    public String getName() {
        return name;
    }

    public String getIcon() {
        return icon;
    }

    public String getLink() {
        return link;
    }
}