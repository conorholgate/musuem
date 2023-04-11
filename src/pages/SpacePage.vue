<!-- This task is spread between two vue components.

GENERAL GUIDELINES

- Use ES6 notation
- Use SCSS
- Use BEM for classes if possible
- Using Lodash would make some functions a lot easier! (https://lodash.com/docs/4.17.15)
- We've added a bit of code for context, do what you want with it. Feel free to modify or move if you think something else is better. However, please do not modify the arrays/objects in "data()"
- We do not expect things to be working fully or look perfect but the code added and the approach need to make sense, and there needs to be some evidence that user experience was considered
- If at any point you want to do something but you do not have a package imported, just mock it out in the code as best you can and/or put a comment about what you would have done if you'd had the package available.



CONTEXT

You manage a natural history museum website. The museum has a set of web pages, each with a theme, and containing a list of that theme's highlights within the museum's exhibits. These pages include Dinosaurs, Space, Oceans, and Wildlife.

For example:
On the Space page, you have a list of cards, each with a space-related subject found in the museum, like asteroids, comets, black holes, stars, etc...
On the Dinosaur page, you have a list of cards, each with a dinosaur referencing fossils found in the museum.
On the Wildlife page, you have a list of cards, each with an animal.

The museum also works with partners and has set up an API where the museum website receives data related to one of these pages. For example, the museum partners with an observatory in Hawaii and receives some Space highlights from them that need to be mixed in with the museum's own data.

In the email, there should also be a basic sketch of what the Space page would look like, if that helps to visualize!



YOUR GOAL

Display the Space page highlights on cards in a list using the museum's data combined with data from the partner's API. Sample data is found in "Data()" and since we don't have any backend, pretend it was loaded in. Also to keep it simple, there are only a few highlights there, but there could be hundreds. Note: The data is intentionally in different formats.



REQUIREMENTS

1. Cards displaying highlights from the space partners' API should have a different color branding from those in the museum's own data.

2. While in this case the card only needs to work for the Space page, the card component needs to be done in such a way that it would be easily expandable to the other pages. The museum could have X number of pages and they could continually be adding new ones. As a developer, you don't know what those pages might be.

2.1.    Each page has a special badge in the top right corner of the card. This badge is different on every page, and could be an image, or some styled html elements, or a Font Awesome icon. The Space page has an image of a star. The Dinosaur page has a Font Awesome icon inside a circle. The Oceans page has two Font Awesome icons, a wave and a fish together. And so on...

2.2     The data on the different pages (Space, Dinosaurs...) have commonalities but also differences. All highlights have a name, image, date they were posted, a brief description, and perhaps associated news. But all pages also have extra unique data. For example, on the space page, some highlights also include a link to a quiz on the topic. On the dinosaur card, we have a "Period" key to indicate when that dinosaur lived. On the Wildlife page, we have several additional keys: "Location", "Species", and "Endangered status".

3. The cards should be arranged in order of date created, with the most recent first.


Follow the requirements and also complete any prompts in the two component files. You can return these two files with the content filled in, or copy and paste the relevant code and create something on Github, or in JSFiddle. -->



<template>
    <div class="space-page">
        <div class="space-page__nav">
            <p class="space-page__nav-title">
                Natural History Musuem
            </p>
        </div>
        <h1 class="space-page__title">
            Space
        </h1>
        <div class="space-page__content">
            <div class="space-page__highlights" v-for="(highlight, index) in allHighlights" :key="index">
                <museum-highlight :item="highlight" :customClass="customClass(highlight)">
                    <template #icon>
                       <div>
                            <svg v-if="highlight.custom" class="museum-highlight__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 0l2.139 2.629 3.068-1.441.786 3.297 3.389.033-.722 3.312 3.039 1.5-2.088 2.67 2.088 2.67-3.039 1.5.722 3.312-3.389.033-.786 3.297-3.068-1.441-2.139 2.629-2.139-2.629-3.068 1.441-.786-3.297-3.389-.033.722-3.312-3.039-1.5 2.088-2.67-2.088-2.67 3.039-1.5-.722-3.312 3.389-.033.786-3.297 3.068 1.441z"/></svg>
                            <svg v-else class="museum-highlight__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                    </template>
                    <template #extra>
                        <div class="museum-highlight__extra">
                            <div v-if="highlight.news">
                                {{ highlight.news.title }}
                            </div>
                            <div v-if="highlight.quiz">
                                <span>Quiz: </span><a :href="highlight.quiz" target="_blank">{{ highlight.quiz }}</a>
                            </div>
                        </div>
                        
                    </template>
                </museum-highlight>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import MuseumHighlight from '../components/MuseumHighlight';

export default {
    name: 'SpacePage',
    components: {
        MuseumHighlight
    },
    data() {
        return {
            spaceHighlights: [
                {
                    date: '2020-04-20 12:20:00',
                    description: 'Asteroids are minor planets, especially of the inner Solar System. Larger asteroids have also been called planetoids.',
                    id: 1,
                    image: '',
                    name: 'Asteroids',
                },
                {
                    date: '2020-05-20 15:50:00',
                    description: 'A comet is an icy, small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing.',
                    id: 9,
                    image: '',
                    name: 'Comets',
                },
                {
                    date: '2020-05-01 9:22:00',
                    description: 'The term planet is ancient, with ties to history, astrology, science, mythology, and religion.',
                    id: 7,
                    image: '',
                    name: 'Planets',
                    news: {
                        date: '2020-08-18 18:00:00',
                        title: 'Attend our talk about Jupiter with Dr. Hogarth',
                    },
                    quiz: 'https://planetquiz.space',
                },
                {
                    date: '2020-07-05 4:10:00',
                    description: 'A meteor shower is a celestial event in which a number of meteors are observed to radiate, or originate, from one point in the night sky.',
                    id: 12,
                    image: '',
                    name: 'Meteor showers',
                    news: {
                        title: 'The Lyrids will peak at on April 21-22 2021, at night',
                    },
                },
            ],
            spacePartners: {
                observatory: {
                    createdAt: '2020-06-01 11:45:00',
                    info: 'The Mauna Kea Observatories (MKO) are a number of independent astronomical research facilities and large telescope observatories that are located at the summit of Mauna Kea on the Big Island of Hawaiʻi, United States.',
                    image: '',
                    name: 'Mauna Kea Observatories',
                },
            },
            allHighlights: []
        };
    },
    computed: {
    },
    methods: {
        editObjectKeys(object) {
            const newObj = _.mapKeys(object, (value, key) => {
                if (key === 'createdAt') {
                    return 'date';
                } 
                if (key === 'info') {
                    return 'description'
                } 
                return key
            });
            return newObj
        },
        addCustomFlag(item) {
            return item.custom = true
        },
        mergeData(...arrays) {
            this.allHighlights = _.flattenDeep(arrays)
        },
        orderData(array) {
            this.allHighlights = _.orderBy(array, ['date'], ['desc']);
        },
        customClass(highlight) {
           if (!highlight.custom) {
            return {}
           } else {
            return {
                "background-color": "rgb(251, 247, 222)",
                "border": "2px solid gold",
                "border-radius": "8px"
            }
           }
        }
    },
    created() {
        if (this.spacePartners.observatory) {   
            let spacePartners = []
            // change object keys to match spaceHighlights
            const newObj = this.editObjectKeys(this.spacePartners.observatory)
            spacePartners.push(newObj)

            // add custom flag to apply different branding
            spacePartners.forEach(item => {
                this.addCustomFlag(item)
            })

            this.mergeData(this.spaceHighlights, spacePartners)
        } 
        else {
            this.allHighlights = this.spaceHighlights
        }
        this.orderData(this.allHighlights)
    },
};
</script>

<style lang="scss" scoped>
.space-page {
    &__nav {
        display: flex;
        align-items: center;
        height: 64px;
        background: rgb(203, 203, 203);
    }
    &__nav-title {
        font-size: 24px;
        font-weight: 400;
        margin-left: 20px;
    }
    &__title {
        color: black;
        font-size: 3rem;
        font-weight: 600;
        padding: 20px;
    }
    &__content {
        margin: 20px 0 40px 0;
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
    }
    &__highlights-icon {
        position: absolute;
        display: inline-block;
        height: 40px;
        width: 40px;
        top: 5px;
        right: 5px;
        z-index: 10;
    }
    @media (max-width: 768px) {
        &__content {
            display: flex;
            justify-content: center;
            padding: 0 10px;
        }
        
    }
}
</style>
