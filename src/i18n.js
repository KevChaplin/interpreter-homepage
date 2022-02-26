import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


// Internationalization package I18Next.
// Contains all text for use on web page.
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
            nav: {
              top: "Top",
              about: "About Me",
              work: "My Work",
              contact: "Contact Me"
            },
            intro: {
              title: "Andrzej Zacharski, Ph.D.",
              subtitle1: "World class interpretation in Polish, English, Japanese, Russian and German",
              subtitle2: "Business, Politics, Art, Sports, Tourism and more"
            },
            aboutMe: {
              title: "About Me",
              para1: 'Andrzej Zacharski, Ph.D. is a native of Poland and originally came to Tokyo in 2003, to study Japanese culture. He graduated from the Meisei University, with the speciality in Japanese language and in 2019 he completed the doctoral course at the University of the Ryukyus, in Okinawa.',
              para2: 'His natural talent for learning foreign languages has led him to work as multilingual interpreter for various international organizations.',
              para3: "For many years he has been co-operating regularly with Polish Karate Federation, Embassy of Poland in Tokyo and Okinawa Prefectural Goverment. In the recent years has also been working for the Public Prosecutor's Office and Okinawa Customs Office.",
              para4: "He has experience in teaching martial arts in several languages as well as the languages themselves. His background in sports competition is reflected in the clarity, strength and confidence of his voice.",
              para5: 'Andrzej can be seen in the 2004 top-ranked Japanese movie "Otosan-no Backdrop", the 2009 hit movie "Hagetaka" , as well as in the movie "Miracle City Koza" in 2022.'
            },
            myWork: {
              title: "My Work",
              img01: {
                title: "Shinoyama Kishin photography exhibition - Katowice, Poland",
                subtitle: "Japanese, English, Polish"
              },
              img02: {
                title: "Former President of Poland Lech Walesa, official visit in Japan - Tokyo, Japan",
                subtitle: "Japanese, English, Polish"
              },
              img03: {
                title: "Former Prime Minister of Japan Naoto Kan documentary video shooting - Tokyo, Japan",
                subtitle: "Japanese, Polish"
              },
              img04: {
                title: "Press conference with Karate World Champion Kenji Yamaki - Cracow, Poland",
                subtitle: "Polish, English, Japanese"
              },
              img05: {
                title: '"Recycling in Japan" seminar for Polish group - Tokyo, Japan',
                subtitle: "Polish, English, Japanese"
              },
              img06: {
                title: "MITT tourism exhibition - Moscow, Russia",
                subtitle: "Japanese, Russian"
              },
              img07: {
                title: "Polish National Karate Team in Japan - Tokyo, Japan",
                subtitle: "Japanese, Polish"
              },
              img08: {
                title: "Okinawa Tourism reception party, Vice Governor Yoshiyuki Uehara opening speech - Yomitan, Japan",
                subtitle: "Japanese, English"
              },
              img09: {
                title: "Polish Ambassador in Japan Cyryl Kozaczewski reception party - Naha, Japan",
                subtitle: "Japanese, English, Polish"
              },
              img10: {
                title: "ITB Berlin tourism exhibition - Berlin, Germany",
                subtitle: "Japanese, English, Polish, German"
              },
            },
            contact: {
              title: "Contact Me",
              subtitle: "Please fill in the form below for enquiries and I will get back to you as soon as possible.",
              name: {
                label: "Name",
                placeholder: "Enter name"
              },
              email: {
                label: "Email",
                placeholder: "Enter email address"
              },
              message: {
                label: "Message",
                placeholder: "Enter your message"
              },
              button: "Submit"
            },
            footer: {
              copyright: "Copyright",
              imageBy: "Background Image by",
              on: "on",
              flagsBy: "National Flags by",
              websiteBy: "Website by"
            }
        }
      },
      jp: {
        translation: {
          nav: {
            top: "Top",
            about: "About Me",
            work: "My Work",
            contact: "Contact Me"
          },
            intro: {
              title: "アンジェイ　ザハルスキ　博士",
              subtitle1: "World class interpretation in Polish, English, Japanese, Russian and German",
              subtitle2: "Business, Politics, Art, Sports, Tourism and more"
            },
            aboutMe: {
              title: 'About Me',
              para1: "アンジェイ ザハルスキ 博士は、日本の文化を勉強するため、2003年にポーランドから来日。2010年に明星大学日本文化学部言語文化学科を卒業し、2019年に琉球大学人文社会研究科の博士後期コースを修了した。現在、マルチ言語通訳者として活躍している",
              para2: "持ち前の才能を生かし、駐日ポーランド共和国大使館・領事館やポーランド空手道連盟など、様々な国際組織で優れた言語能力を発揮している。 2019年から、沖縄県県庁、那覇地方検察庁、沖縄地区税関にも翻訳者と通訳者として協力している。外国語講師、格闘技の指導者や選手として活躍した経験は、明晰で自信に満ち溢れた、張りのある声となって現れている。",
              para3: "2004年にヒットした「お父さんのバックドロップ」、それから2009年の「ハゲタカ」という映画で、彼の姿を見ることが出来る。",
              para4: "2004年にヒットした「お父さんのバックドロップ」、それから2009年の「ハゲタカ」という映画で、彼の姿を見ることが出来る。",
              para5: "2004年にヒットした「お父さんのバックドロップ」、それから2009年の「ハゲタカ」という映画で、彼の姿を見ることが出来る。"

            },
            myWork: {
              title: "My Work",
              img01: {
                title: "Shinoyama Kishin photography exhibition - Katowice, Poland",
                subtitle: "Japanese, English, Polish"
              },
              img02: {
                title: "Former President of Poland Lech Walesa, official visit in Japan - Tokyo, Japan",
                subtitle: "Japanese, English, Polish"
              },
              img03: {
                title: "Former Prime Minister of Japan Naoto Kan documentary video shooting - Tokyo, Japan",
                subtitle: "Japanese, Polish"
              },
              img04: {
                title: "Press conference with Karate World Champion Kenji Yamaki - Cracow, Poland",
                subtitle: "Polish, English, Japanese"
              },
              img05: {
                title: '"Recycling in Japan" seminar for Polish group - Tokyo, Japan',
                subtitle: "Polish, English, Japanese"
              },
              img06: {
                title: "MITT tourism exhibition - Moscow, Russia",
                subtitle: "Japanese, Russian"
              },
              img07: {
                title: "Polish National Karate Team in Japan - Tokyo, Japan",
                subtitle: "Japanese, Polish"
              },
              img08: {
                title: "Okinawa Tourism reception party, Vice Governor Yoshiyuki Uehara opening speech - Yomitan, Japan",
                subtitle: "Japanese, English"
              },
              img09: {
                title: "Polish Ambassador in Japan Cyryl Kozaczewski reception party - Naha, Japan",
                subtitle: "Japanese, English, Polish"
              },
              img10: {
                title: "ITB Berlin tourism exhibition - Berlin, Germany",
                subtitle: "Japanese, English, Polish, German"
              },
            },
            contact: {
              title: "Contact Me",
              subtitle: "Please fill in the form below for enquiries and I will get back to you as soon as possible.",
              name: {
                label: "Name",
                placeholder: "Enter name"
              },
              email: {
                label: "Email",
                placeholder: "Enter email address"
              },
              message: {
                label: "Message",
                placeholder: "Enter your message"
              },
              button: "Submit"
            },
            footer: {
              copyright: "Copyright",
              imageBy: "Background Image by",
              on: "on",
              flagsBy: "National Flags by",
              websiteBy: "Website by"
            }
        }
      }
    }
  });

export default i18n;