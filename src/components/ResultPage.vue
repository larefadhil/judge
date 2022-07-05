<template>
	<div class="cyan lighten-5" style="height:100vh">
		<v-col class="d-flex justify-center align-end" style="height:100px">
			<h2 class="indigo--text  align-self: self-end;">گەشتینە کۆتایی</h2>
		</v-col>
		<v-col class="d-flex justify-center align-end" >
			<h2 class="indigo--text  align-self: self-end;" v-show="count==3"> زۆر باشە ئافەرم بەردەوامبە</h2>
			<h2 class="indigo--text  align-self: self-end;" v-show="count==2"> زۆر خراپ نییە</h2>
			<h2 class="indigo--text  align-self: self-end;" v-show="count==1"> دڵم لێو شکاوە</h2>
			<h2 class="indigo--text  align-self: self-end;" v-show="count==0"> چۆن ئەبێ شتی وا ؟!</h2>
		</v-col>
		<v-col class="d-flex justify-center align-end">
			<h4 class="indigo--text  align-self: self-end;" v-show="count==3"> هەموو کارەکانت بە باشی ئەنجام داوە</h4>
			<h4 class="indigo--text  align-self: self-end;" v-show="count==2"> دووت کردوە هم ...</h4>
			<h4 class="indigo--text  align-self: self-end;" v-show="count==1"> شتێکی کەش بکەی هەر باشە</h4>
			<h4 class="indigo--text  align-self: self-end;" v-show="count==0"> ویی ڕاکە بڕۆ شتێ بکە !!</h4>
		</v-col>
		<v-col class="text-center">
			<v-col cols="auto">
                <router-link to="/">
				<v-btn class="indigo lighten-1 white--text" x-large width="100%" v-bind="attrs" v-on="on" @click="resetAll()" v-show="count==3">بێگومان هەروا بەردەوامدەبم</v-btn>
				<v-btn class="indigo lighten-1 white--text" x-large width="100%" v-bind="attrs" v-on="on" @click="resetAll()" v-show="count==2">سوپاس</v-btn>
				<v-btn class="indigo lighten-1 white--text" x-large width="100%" v-bind="attrs" v-on="on" @click="resetAll()" v-show="count==1">باش</v-btn>
				<v-btn class="indigo lighten-1 white--text" x-large width="100%" v-bind="attrs" v-on="on" @click="resetAll()" v-show="count==0"> ببورە شەرمەزارم ئێستا ئەڕۆم</v-btn>
            </router-link>
            </v-col>

		</v-col>
		<v-col class="text-center py-0">
			<v-row>
				<v-col cols=auto>
					<h2>سترێچین:</h2>
				</v-col>
				<v-col cols=1 class="" style="align-self: center;" v-show="question1">
					<v-icon color="green" large>
						mdi-check-outline
					</v-icon>
				</v-col>
				<v-col cols=1 class="" style="align-self: center;" v-show="question1==0">
					<v-icon color="red" large>
						mdi-close-outline
					</v-icon>
				</v-col>
			</v-row>
		</v-col>
		<v-col class="text-center py-0">
			<v-row>
				<v-col cols=auto>
					<h2>زانیاری نوێ:</h2>
				</v-col>
				<v-col cols=1 class="" style=" align-self: center;" v-show="question2">
					<v-icon color="green" large>
						mdi-check-outline
					</v-icon>
				</v-col>
				<v-col cols=1 class="" style="align-self: center;" v-show="question2==0">
					<v-icon color="red" large>
						mdi-close-outline
					</v-icon>
				</v-col>
			</v-row>
		</v-col>
		<v-col class="text-center py-0">
			<v-row>
				<v-col cols=auto>
					<h2>خوێندنەوە:</h2>
				</v-col>
				<v-col cols=1 class="" style=" align-self: center;" v-show="question3">
					<v-icon color="green" large>
						mdi-check-outline
					</v-icon>
				</v-col>
				<v-col cols=1 class="" style="align-self: center;" v-show="question3==0">
					<v-icon color="red" large>
						mdi-close-outline
					</v-icon>
				</v-col>
			</v-row>
		</v-col>

		<v-col class="d-flex justify-center align-center" >
			<v-img src="../photos/success.png" max-height="150" max-width="300" v-show="count==3"></v-img>
			<v-img src="../photos/keepgoing.png" max-height="150" max-width="300" v-show="count==2"></v-img>
			<v-img src="../photos/sad.png" max-height="150" max-width="300" v-show="count==1"></v-img>
			<v-img src="../photos/no.png" max-height="150" max-width="300" v-show="count==0"></v-img>
		</v-col>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		methods: {
			resetAll() {
				this.$store.dispatch('resetAll')
			},
		},
		computed: {
			...mapGetters([
				'question1',
				'question2',
				'question3',
				'count'


			]),
		},
	}
</script>

<style>
	a {
		text-decoration: none;
	}
</style>