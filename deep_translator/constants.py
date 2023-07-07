__copyright__ = "Copyright (C) 2020 Nidhal Baccouri"


OPEN_AI_ENV_VAR = "OPEN_API_KEY"
DEEPL_ENV_VAR = "DEEPL_API_KEY"
LIBRE_ENV_VAR = "LIBRE_API_KEY"
MSFT_ENV_VAR = "MICROSOFT_API_KEY"
QCRI_ENV_VAR = "QCRI_API_KEY"
YANDEX_ENV_VAR = "YANDEX_API_KEY"


BASE_URLS = {
    "GOOGLE_TRANSLATE": "https://translate.google.com/m",
    "PONS": "https://en.pons.com/translate/",
    "YANDEX": "https://translate.yandex.net/api/{version}/tr.json/{endpoint}",
    "LINGUEE": "https://www.linguee.com/",
    "MYMEMORY": "http://api.mymemory.translated.net/get",
    "QCRI": "https://mt.qcri.org/api/v1/{endpoint}?",
    "DEEPL": "https://api.deepl.com/{version}/",
    "DEEPL_FREE": "https://api-free.deepl.com/{version}/",
    "MICROSOFT_TRANSLATE": "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0",
    "PAPAGO": "https://papago.naver.com/",
    "PAPAGO_API": "https://openapi.naver.com/v1/papago/n2mt",
    "LIBRE": "https://libretranslate.com/",
    "LIBRE_FREE": "https://libretranslate.de/",
}

GOOGLE_LANGUAGES_TO_CODES = {
    "afrikaans": "af",
    "albanian": "sq",
    "amharic": "am",
    "arabic": "ar",
    "armenian": "hy",
    "assamese": "as",
    "aymara": "ay",
    "azerbaijani": "az",
    "bambara": "bm",
    "basque": "eu",
    "belarusian": "be",
    "bengali": "bn",
    "bhojpuri": "bho",
    "bosnian": "bs",
    "bulgarian": "bg",
    "catalan": "ca",
    "cebuano": "ceb",
    "chichewa": "ny",
    "chinese (simplified)": "zh-CN",
    "chinese (traditional)": "zh-TW",
    "corsican": "co",
    "croatian": "hr",
    "czech": "cs",
    "danish": "da",
    "dhivehi": "dv",
    "dogri": "doi",
    "dutch": "nl",
    "english": "en",
    "esperanto": "eo",
    "estonian": "et",
    "ewe": "ee",
    "filipino": "tl",
    "finnish": "fi",
    "french": "fr",
    "frisian": "fy",
    "galician": "gl",
    "georgian": "ka",
    "german": "de",
    "greek": "el",
    "guarani": "gn",
    "gujarati": "gu",
    "haitian creole": "ht",
    "hausa": "ha",
    "hawaiian": "haw",
    "hebrew": "iw",
    "hindi": "hi",
    "hmong": "hmn",
    "hungarian": "hu",
    "icelandic": "is",
    "igbo": "ig",
    "ilocano": "ilo",
    "indonesian": "id",
    "irish": "ga",
    "italian": "it",
    "japanese": "ja",
    "javanese": "jw",
    "kannada": "kn",
    "kazakh": "kk",
    "khmer": "km",
    "kinyarwanda": "rw",
    "konkani": "gom",
    "korean": "ko",
    "krio": "kri",
    "kurdish (kurmanji)": "ku",
    "kurdish (sorani)": "ckb",
    "kyrgyz": "ky",
    "lao": "lo",
    "latin": "la",
    "latvian": "lv",
    "lingala": "ln",
    "lithuanian": "lt",
    "luganda": "lg",
    "luxembourgish": "lb",
    "macedonian": "mk",
    "maithili": "mai",
    "malagasy": "mg",
    "malay": "ms",
    "malayalam": "ml",
    "maltese": "mt",
    "maori": "mi",
    "marathi": "mr",
    "meiteilon (manipuri)": "mni-Mtei",
    "mizo": "lus",
    "mongolian": "mn",
    "myanmar": "my",
    "nepali": "ne",
    "norwegian": "no",
    "odia (oriya)": "or",
    "oromo": "om",
    "pashto": "ps",
    "persian": "fa",
    "polish": "pl",
    "portuguese": "pt",
    "punjabi": "pa",
    "quechua": "qu",
    "romanian": "ro",
    "russian": "ru",
    "samoan": "sm",
    "sanskrit": "sa",
    "scots gaelic": "gd",
    "sepedi": "nso",
    "serbian": "sr",
    "sesotho": "st",
    "shona": "sn",
    "sindhi": "sd",
    "sinhala": "si",
    "slovak": "sk",
    "slovenian": "sl",
    "somali": "so",
    "spanish": "es",
    "sundanese": "su",
    "swahili": "sw",
    "swedish": "sv",
    "tajik": "tg",
    "tamil": "ta",
    "tatar": "tt",
    "telugu": "te",
    "thai": "th",
    "tigrinya": "ti",
    "tsonga": "ts",
    "turkish": "tr",
    "turkmen": "tk",
    "twi": "ak",
    "ukrainian": "uk",
    "urdu": "ur",
    "uyghur": "ug",
    "uzbek": "uz",
    "vietnamese": "vi",
    "welsh": "cy",
    "xhosa": "xh",
    "yiddish": "yi",
    "yoruba": "yo",
    "zulu": "zu",
}

PONS_CODES_TO_LANGUAGES = {
    "ar": "arabic",
    "bg": "bulgarian",
    "zh-cn": "chinese",
    "cs": "czech",
    "da": "danish",
    "nl": "dutch",
    "en": "english",
    "fr": "french",
    "de": "german",
    "el": "greek",
    "hu": "hungarian",
    "it": "italian",
    "la": "latin",
    "no": "norwegian",
    "pl": "polish",
    "pt": "portuguese",
    "ru": "russian",
    "sl": "slovenian",
    "es": "spanish",
    "sv": "swedish",
    "tr": "turkish",
    "elv": "elvish",
}

LINGUEE_LANGUAGES_TO_CODES = {
    "maltese": "maltese",
    "english": "english",
    "german": "german",
    "bulgarian": "bulgarian",
    "polish": "polish",
    "portuguese": "portuguese",
    "hungarian": "hungarian",
    "romanian": "romanian",
    "russian": "russian",
    # "serbian": "sr",
    "dutch": "dutch",
    "slovakian": "slovakian",
    "greek": "greek",
    "slovenian": "slovenian",
    "danish": "danish",
    "italian": "italian",
    "spanish": "spanish",
    "finnish": "finnish",
    "chinese": "chinese",
    "french": "french",
    # "croatian": "hr",
    "czech": "czech",
    "laotian": "laotian",
    "swedish": "swedish",
    "latvian": "latvian",
    "estonian": "estonian",
    "japanese": "japanese",
}

DEEPL_LANGUAGE_TO_CODE = {
    "bulgarian": "bg",
    "czech": "cs",
    "danish": "da",
    "german": "de",
    "greek": "el",
    "english": "en",
    "spanish": "es",
    "estonian": "et",
    "finnish": "fi",
    "french": "fr",
    "hungarian": "hu",
    "indonesian": "id",
    "italian": "it",
    "japanese": "ja",
    "lithuanian": "lt",
    "latvian": "lv",
    "dutch": "nl",
    "polish": "pl",
    "portuguese": "pt",
    "romanian": "ro",
    "russian": "ru",
    "slovak": "sk",
    "slovenian": "sl",
    "swedish": "sv",
    "turkish": "tr",
    "ukrainian": "uk",
    "chinese": "zh",
}

PAPAGO_LANGUAGE_TO_CODE = {
    "ko": "Korean",
    "en": "English",
    "ja": "Japanese",
    "zh-CN": "Chinese",
    "zh-TW": "Chinese traditional",
    "es": "Spanish",
    "fr": "French",
    "vi": "Vietnamese",
    "th": "Thai",
    "id": "Indonesia",
}

QCRI_LANGUAGE_TO_CODE = {"Arabic": "ar", "English": "en", "Spanish": "es"}

LIBRE_LANGUAGES_TO_CODES = {
    "English": "en",
    "Arabic": "ar",
    "Chinese": "zh",
    "French": "fr",
    "German": "de",
    "Hindi": "hi",
    "Indonesian": "id",
    "Irish": "ga",
    "Italian": "it",
    "Japanese": "ja",
    "Korean": "ko",
    "Polish": "pl",
    "Portuguese": "pt",
    "Russian": "ru",
    "Spanish": "es",
    "Turkish": "tr",
    "Vietnamese": "vi",
}
