package com.itv.core.models;

import java.util.List;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class CardsModel {

    @ChildResource(name = "cards")
    private List<CardItem> cards;

    public List<CardItem> getCards() {
        return cards;
    }

    /**
     * Clase interna para representar cada item del multifield
     */
    @Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
    public static class CardItem {

        @ValueMapValue
        private String title;

        @ValueMapValue
        private String image;

        @ValueMapValue
        private String description;

        public String getTitle() {
            return title;
        }

        public String getImage() {
            return image;
        }

        public String getDescription() {
            return description;
        }
    }
}