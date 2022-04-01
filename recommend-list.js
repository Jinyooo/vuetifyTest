Vue.component('recommend-list', {
    props : ['recommendations'],
    template : 
    `
    <div>
        <v-container>
            <v-card class="mt-5">
                <v-slide-x-transition group>
                    <!-- 리스트아이템을 이용한 추천코멘트  반복-->
                    <v-list-item 
                    v-for="item in recommendations"
                    :key="item.title">>
                        <v-list-content>
                            <v-list-item-title>
                                {{ item.title }} 추천합니다.
                            </v-list-item-title>
                        </v-list-content>
                    </v-list-item>
                </v-slide-x-transition>
            </v-card>
        </v-container>
    </div>

    `,
    data : function() {
        return {

        }
    }
}) 