<template>
	<div class="cyan lighten-5" style="height:100vh">
		<v-col class="d-flex justify-center align-end" style="height:100px">
			<h2 class="indigo--text  align-self: self-end;">پرسیاری کۆتای:</h2>
		</v-col>
		<v-col class="d-flex justify-center align-end">
			<h2 class="indigo--text  align-self: self-end;">هیچت خوێندۆتەوە ؟</h2>
		</v-col>
		<v-col class="text-center">
			<v-col cols="auto">
				<v-dialog persistent transition="dialog-bottom-transition" max-width="600">
					<template v-slot:activator="{ on, attrs }">
						<v-btn class="indigo lighten-1 white--text" x-large width="100%" v-bind="attrs" v-on="on" @click="addToQuestion()">بەڵێ</v-btn>

					</template>
					<template v-slot:default="dialog">
						<v-card>
							<v-card-text>
								<div class="text-h2 pt-5 d-flex justify-center align-center">بەتەڵ!!</div>
							</v-card-text>
							<router-link to="/ResultPage">
								<v-card-actions class="my-4">
									<v-btn class="indigo lighten-1 white--text" @click="dialog.value = false" width="100%" x-large>سوپاس</v-btn>
								</v-card-actions>
							</router-link>
						</v-card>
					</template>
				</v-dialog>
			</v-col>

		</v-col>

		<v-col class="text-center">
			<v-col cols="auto">
				<v-dialog persistent transition="dialog-bottom-transition" max-width="600">
					<template v-slot:activator="{ on, attrs }">
						<v-btn class="red lighten-1 white--text" x-large width="100%" v-bind="attrs" v-on="on">نەخێر</v-btn>
					</template>
					<template v-slot:default="dialog">
						<v-card>
							<v-card-text>
								<div class="text-h2 pt-5 d-flex justify-center align-center">دڵم شکا!!</div>
							</v-card-text>
							<router-link to="/ResultPage">
								<v-card-actions class="my-4">
									<v-btn class="indigo lighten-1 white--text" @click="dialog.value = false" width="100%" x-large>کاتم نەبوو</v-btn>
								</v-card-actions>
							</router-link>
						</v-card>
					</template>
				</v-dialog>
			</v-col>

		</v-col>
		<v-col class="d-flex justify-center align-center">
			<v-img src="../photos/red.png" max-height="150" max-width="300"></v-img>
		</v-col>

	</div>
</template>

<script>
	export default {
		methods: {

			addToQuestion() {
				this.$store.dispatch('addToQuestion3', true, this.question1)
			},
		},
	}
</script>

<style>
	a {
		text-decoration: none;
	}
</style>