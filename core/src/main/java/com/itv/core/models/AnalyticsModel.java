package com.itv.core.models;

import com.itv.core.config.AnalyticsConfig;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.caconfig.ConfigurationBuilder;

import javax.annotation.PostConstruct;

@Model(
    adaptables = SlingHttpServletRequest.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
    cache = true 
)
public class AnalyticsModel {

    @SlingObject
    private Resource resource;

    private String cookiebotId;
    private String googleAnalyticsId;

    @PostConstruct
    protected void init() {
        if (resource != null) {
            ConfigurationBuilder builder = resource.adaptTo(ConfigurationBuilder.class);
            if (builder != null) {
                AnalyticsConfig config = builder.as(AnalyticsConfig.class);
                if (config != null) {
                    this.cookiebotId = config.cookiebotId();
                    this.googleAnalyticsId = config.googleAnalyticsId();
                }
            }
        }
    }

    public String getCookiebotId() {
        return cookiebotId;
    }

    public String getGoogleAnalyticsId() {
        return googleAnalyticsId;
    }
}