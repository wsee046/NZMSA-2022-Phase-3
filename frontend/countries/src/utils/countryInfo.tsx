export const getLanguages = (
    countryInfo: any
): String[] => {
    const languages: String[] = [];
    if (countryInfo !== undefined && countryInfo !== null) {
        countryInfo.languages.forEach((language: any) => languages.push(language.name))
    }
    return languages;
}
