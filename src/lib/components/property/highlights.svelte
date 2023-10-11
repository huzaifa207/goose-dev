<section id="highlight" class="section-prop">
    <h2>Highlights</h2>
    <div class="flex flex-col lg:flex-row items-center bg-secondaryBg rounded-lg overflow-hidden font-inter">
        <div class="flex-3">
            <img src="/hero.png" alt="" class="h-full w-full object-cover hidden lg:block">
        </div>
        <div class="flex-4 h-4/5 bg-white lg:m-4 p-5 rounded-lg">
            <div class="flex gap-4 p-2">
                <button>Exterior</button>
                <button>Interior</button>
                <button>Kitchen</button>
                <button>Bath</button>
            </div>
            <div class="py-2 px-8">
                <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, voluptatem et! Ut at esse et cupiditate harum nostrum, libero natus minus provident, sequi recusandae quis ducimus eos. Sed, illo est?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum odit optio odio dicta fugiat</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste doloribus sequi nulla soluta adipisci nobis exercitationem tempore, ipsam libero voluptas asperiores laboriosam voluptates ratione praesentium assumenda! Possimus, minima eligendi.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum odit optio odio dicta fugiat</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
    button {
        @apply py-2 w-max px-2 md:px-0 md:w-28 bg-secondaryBg rounded-full text-sm font-medium focus:font-semibold focus:text-white focus:bg-black
    }

    ul {
        @apply list-disc text-justify
    }

    ul > li {
        @apply my-3
    }
</style>

