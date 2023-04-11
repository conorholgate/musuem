<template>
    <div class="museum-highlight" :style="customClass">
        <slot name="icon">
        </slot>
        <slot name="image">
            <div>
                <img class="museum-highlight__image" :src="
          'https://source.unsplash.com/random/360x320/?' +
          item.name +
          '&' +
          Math.random(10)
        " :alt="item.name">
            </div>
        </slot>
        <slot name="name" >
            <div v-if="item.name" class="museum-highlight__name">
                {{ item.name }}
            </div>
        </slot>
        <slot name="description" >
            <div v-if="item.description" class="museum-highlight__description">
                <p>{{ item.description }}</p>
            </div>
        </slot>
        <slot name="news">
            <div v-if="item.news" class="museum-highlight__news">
                <div class="museum-highlight__news-title">News</div>
                <p>{{ item.news.title }}</p>
                <p v-if="item.news.date">{{ formatDate(item.news.date) }}</p>
            </div>
        </slot>
        <slot name="extra">
            <div class="museum-highlight__extra">
                <div v-if="extraInfo.length" class="museum-highlight__extra-title">Extras</div>
                <div v-for="(info, index) in extraInfo" :key="index">
                    <div v-if="isUrl(item[info])">
                        <span>{{ `${toUpperCase(info)}: ` }}</span><a  :href="item[info]" target="_blank">{{ item[info] }}</a>
                    </div>   
                    <div v-else>
                        {{ `${info}: ${item[info]}` }}
                    </div>                 
                </div>
            </div>
        </slot>
        <slot name="date">
            <div class="museum-highlight__date" v-if="item.date">
                {{ `Date posted: ${formatDate(item.date)}` }}
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'MuseumHighlight',
    props: {
        item: {
            type: Object
        },
        customClass: {
            type: Object
        }
    },
    data() {
        return {

        };
    },
    computed: {
        extraInfo() {
            const defaultKeys = [
                'id',
                'date',
                'name',
                'description',
                'image',
                'news',
                'custom'
            ]
            let itemKeys = Object.keys(this.item)
            return itemKeys.filter(key => !defaultKeys.includes(key))
        }
    },
    methods: {
        formatDate(date) {
            let newDate = new Date(date)
            const options = {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                weekday: 'long',
            }
            return newDate.toLocaleDateString(undefined, options)
        },
        isUrl(url) {
            return !!new URL(url)
        },
        toUpperCase(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    },
    created() {

    },
};
</script>

<style lang="scss">
.museum-highlight {
    $self: &;
    position: relative;
    max-width: 300px;
    z-index: 1;
    padding: 20px;
    color: #515151;

    &__icon {
        position: absolute;
        display: inline-block;
        height: 40px;
        width: 40px;
        top: 5px;
        right: 5px;
        z-index: 10;
    }
    &__image {
        max-width: 100%;
    }
    &__name {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 5px;
        color: black;
    }
    &__description {
        -webkit-box-orient: vertical;
        display: block;
        display: -webkit-box;
        overflow: hidden !important;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        margin-bottom: 10px;
    }
    &__news {
        margin-bottom: 5px;
    }
    &__news-title, &__extra-title {
        font-weight: bold;
        text-decoration: underline;
    }
    &__extra {
        margin-bottom: 5px;
    }
}
</style>
