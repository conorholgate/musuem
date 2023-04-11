<template>
    <div class="museum-highlight" :style="customClass">
        <slot name="icon">
        </slot>
        <slot name="image">
            <div>
                <img class="museum-highlight__image" src="../assets/space.png" alt="Highlight image">
            </div>
        </slot>
        <slot name="name" >
            <div v-if="item.name" class="museum-highlight__name">
                {{ item.name }}
            </div>
        </slot>
        <slot name="description" >
            <div v-if="item.description" class="museum-highlight__description">
                {{ item.description }}
            </div>
        </slot>
        <slot name="extra" >
            <!-- <div class="museum-highlight__extra">
                <div v-for="(value, key) in displayExtraInfo" :key="key">
                    <div v-if="key === 'quiz'">
                        <span>Quiz: </span><a :href="value">{{ value }}</a>
                    </div>
                    <div v-else>
                        {{ value }}
                    </div>
                </div>
            </div> -->
        </slot>
        <slot name="date">
            <div class="museum-highlight__date" v-if="item.date">
                {{ `Date posted: ${item.date}` }}
            </div>
        </slot>
    </div>
</template>

<script>
// import _ from 'lodash';
export default {
    name: 'MuseumHighlight',
    props: {
        item: {},
        customClass: {
            type: Object
        }
    },
    data() {
        return {

        };
    },
    computed: {
        // displayExtraInfo() {
        //     function flattenObject(obj) {
        //         const omitKeys = ['id', 'custom', 'name', 'image', 'description', 'date'];
        //         const flattenedObj = {};

        //         function flattenHelper(currObj, path) {
        //             // loops through an object=7
        //             _.forOwn(currObj, (val, key) => {
        //             const currPath = path ? `${path}.${key}` : key;
        //             if (_.isObject(val)) {
        //                 flattenHelper(val, currPath);
        //             } else if (!omitKeys.includes(key)) {
        //                 flattenedObj[currPath] = val;
        //             }
        //             });
        //         }
        //         flattenHelper(obj, '');
        //         return flattenedObj;
        //     }
        //     let results = flattenObject(this.item)
        //     return results
        // }
    },
    methods: {
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
    &__extra {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 5px;
    }
}
</style>
