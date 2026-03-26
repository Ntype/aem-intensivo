package com.itv.core.models;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class SnsModel {

    @ChildResource(name = "snsList")
    private List<SnsItem> snsList;

    public List<SnsItem> getSnsList() {
        return snsList;
    }
}