package com.itv.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class StatCounterItem {

    @ValueMapValue
    private String number;

    @ValueMapValue
    private String symbol;

    @ValueMapValue
    private String label;

    public String getNumber() {
        return number;
    }
    public String getSymbol() {
        return symbol;
    }
    public String getLabel() {
        return label;
    }
}