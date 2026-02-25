package com.itv.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.commons.lang3.StringUtils;

@Model(adaptables = Resource.class)
public class SuperTextModel {

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean showWordCount;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Integer wordLimit;

   public int getWordCount() {
    if (StringUtils.isBlank(text)) {
        return 0;
    }
    
    // Quitar tags HTML
    String cleanText = text.replaceAll("<[^>]*>", "");
    
    // Quitar &nbsp; y otras entidades HTML
    cleanText = cleanText.replaceAll("&[^;]+;", "");
    
    // Quitar espacios múltiples, tabs, saltos de línea
    cleanText = cleanText.trim().replaceAll("\\s+", " ");
    
    // Si después de limpiar está vacío
    if (StringUtils.isBlank(cleanText)) {
        return 0;
    }
    
    String[] words = cleanText.split(" ");
    
    return words.length;
    
    }
    
    public boolean isOverLimit() {
        if (wordLimit == null) {
            return false;
        }
        
        return getWordCount() > wordLimit;
    }
}