<template>
  <div class="pricing14-pricing23 thq-section-padding">
    <div class="pricing14-max-width thq-section-max-width">
      <div class="pricing14-section-title">
        <span class="pricing14-text100 thq-body-small">
          <slot name="content1">
            <!--Default content for content1-->
            <div class="pricing14-fragment33">
              <span class="pricing14-text178">
                Choose the perfect plan for you
              </span>
            </div>
          </slot>
        </span>
        <div class="pricing14-content">
          <h2 class="pricing14-text101 thq-heading-2">
            <slot name="heading1">
              <!--Default content for heading1-->
              <div class="pricing14-fragment35">
                <span class="pricing14-text180">Pricing plan</span>
              </div>
            </slot>
          </h2>
          <p class="pricing14-text102 thq-body-large">
            <slot name="content2">
              <!--Default content for content2-->
              <div class="pricing14-fragment57">
                <span class="pricing14-text202">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <span v-html="rawo7ba"></span>
                </span>
              </div>
            </slot>
          </p>
        </div>
      </div>
      <div class="pricing14-tabs">
        <button
          @click="isMonthly = true"
          v-if="isMonthly"
          class="pricing14-button10 thq-button-animated thq-button-filled"
        >
          <span class="thq-body-small">Monthly</span>
        </button>
        <button
          @click="isMonthly = true"
          v-if="!isMonthly"
          class="pricing14-button11 thq-button-outline thq-button-animated"
        >
          <span class="thq-body-small">Monthly</span>
        </button>
        <button
          @click="isMonthly = false"
          v-if="!isMonthly"
          class="pricing14-button12 thq-button-animated thq-button-filled"
        >
          <span class="thq-body-small">Yearly</span>
        </button>
        <button
          @click="isMonthly = false"
          v-if="isMonthly"
          class="pricing14-button13 thq-button-outline thq-button-animated"
        >
          <span class="thq-body-small">Yearly</span>
        </button>
      </div>
      <div v-if="isMonthly" class="pricing14-container1">
        <div class="pricing14-column1 thq-card">
          <div class="pricing14-price10">
            <div class="pricing14-price11">
              <p class="pricing14-text107 thq-body-large">
                <slot name="plan1">
                  <!--Default content for plan1-->
                  <div class="pricing14-fragment37">
                    <span class="pricing14-text182">Basic plan</span>
                  </div>
                </slot>
              </p>
              <h3 class="pricing14-text108 thq-heading-3">
                <slot name="plan1Price">
                  <!--Default content for plan1Price-->
                  <div class="pricing14-fragment59">
                    <span class="pricing14-text204">Starting at $10/month</span>
                  </div>
                </slot>
              </h3>
              <p class="thq-body-large">
                <slot name="plan1Yearly">
                  <!--Default content for plan1Yearly-->
                  <div class="pricing14-fragment54">
                    <span class="pricing14-text199">$100/year</span>
                  </div>
                </slot>
              </p>
            </div>
            <div class="pricing14-list1">
              <div class="pricing14-list-item10">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan1Feature1">
                    <!--Default content for plan1Feature1-->
                    <div class="pricing14-fragment55">
                      <span class="pricing14-text200">AI symptom checker</span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item11">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan1Feature2">
                    <!--Default content for plan1Feature2-->
                    <div class="pricing14-fragment16">
                      <span class="pricing14-text161">
                        Telemedicine consultations
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item12">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan1Feature3">
                    <!--Default content for plan1Feature3-->
                    <div class="pricing14-fragment53">
                      <span class="pricing14-text198">Medicine delivery</span>
                    </div>
                  </slot>
                </span>
              </div>
            </div>
          </div>
          <button
            class="pricing14-button14 thq-button-outline thq-button-animated"
          >
            <span class="thq-body-small">
              <slot name="plan1Action">
                <!--Default content for plan1Action-->
                <div class="pricing14-fragment13">
                  <span class="pricing14-text158">Sign up now</span>
                </div>
              </slot>
            </span>
          </button>
        </div>
        <div class="pricing14-column2 thq-card">
          <div class="pricing14-price12">
            <div class="pricing14-price13">
              <p class="pricing14-text114 thq-body-large">
                <slot name="plan2">
                  <!--Default content for plan2-->
                  <div class="pricing14-fragment29">
                    <span class="pricing14-text174">Business plan</span>
                  </div>
                </slot>
              </p>
              <h3 class="pricing14-text115 thq-heading-3">
                <slot name="plan2Price">
                  <!--Default content for plan2Price-->
                  <div class="pricing14-fragment43">
                    <span class="pricing14-text188">Starting at $20/month</span>
                  </div>
                </slot>
              </h3>
              <p class="thq-body-large">
                <slot name="plan2Yearly">
                  <!--Default content for plan2Yearly-->
                  <div class="pricing14-fragment23">
                    <span class="pricing14-text168">$200/year</span>
                  </div>
                </slot>
              </p>
            </div>
            <div class="pricing14-list2">
              <div class="pricing14-list-item13">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan2Feature1">
                    <!--Default content for plan2Feature1-->
                    <div class="pricing14-fragment34">
                      <span class="pricing14-text179">AI symptom checker</span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item14">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan2Feature2">
                    <!--Default content for plan2Feature2-->
                    <div class="pricing14-fragment20">
                      <span class="pricing14-text165">
                        Telemedicine consultations
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item15">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan2Feature3">
                    <!--Default content for plan2Feature3-->
                    <div class="pricing14-fragment27">
                      <span class="pricing14-text172">
                        Mood-detecting mental wellness chatbot
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item16">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan2Feature4">
                    <!--Default content for plan2Feature4-->
                    <div class="pricing14-fragment22">
                      <span class="pricing14-text167">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
            </div>
          </div>
          <button
            class="pricing14-button15 thq-button-animated thq-button-filled"
          >
            <span class="thq-body-small">
              <slot name="plan2Action">
                <!--Default content for plan2Action-->
                <div class="pricing14-fragment25">
                  <span class="pricing14-text170">Sign up now</span>
                </div>
              </slot>
            </span>
          </button>
        </div>
        <div class="pricing14-column3 thq-card">
          <div class="pricing14-price14">
            <div class="pricing14-price15">
              <p class="pricing14-text122 thq-body-large">
                <slot name="plan3">
                  <!--Default content for plan3-->
                  <div class="pricing14-fragment60">
                    <span class="pricing14-text205">Enterprise plan</span>
                  </div>
                </slot>
              </p>
              <h3 class="pricing14-text123 thq-heading-3">
                <slot name="plan3Price">
                  <!--Default content for plan3Price-->
                  <div class="pricing14-fragment10">
                    <span class="pricing14-text155">Starting at $30/month</span>
                  </div>
                </slot>
              </h3>
              <p class="thq-body-large">
                <slot name="plan3Yearly">
                  <!--Default content for plan3Yearly-->
                  <div class="pricing14-fragment49">
                    <span class="pricing14-text194">$300/year</span>
                  </div>
                </slot>
              </p>
            </div>
            <div class="pricing14-list3">
              <div class="pricing14-list-item17">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan3Feature1">
                    <!--Default content for plan3Feature1-->
                    <div class="pricing14-fragment26">
                      <span class="pricing14-text171">AI symptom checker</span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item18">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan3Feature2">
                    <!--Default content for plan3Feature2-->
                    <div class="pricing14-fragment32">
                      <span class="pricing14-text177">
                        Telemedicine consultations
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item19">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan3Feature3">
                    <!--Default content for plan3Feature3-->
                    <div class="pricing14-fragment56">
                      <span class="pricing14-text201">
                        Mood-detecting mental wellness chatbot
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item20">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan3Feature4">
                    <!--Default content for plan3Feature4-->
                    <div class="pricing14-fragment50">
                      <span class="pricing14-text195">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item21">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan3Feature5">
                    <!--Default content for plan3Feature5-->
                    <div class="pricing14-fragment41">
                      <span class="pricing14-text186">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
            </div>
          </div>
          <button
            class="pricing14-button16 thq-button-animated thq-button-filled"
          >
            <span class="thq-body-small">
              <slot name="plan3Action">
                <!--Default content for plan3Action-->
                <div class="pricing14-fragment11">
                  <span class="pricing14-text156">Sign up now</span>
                </div>
              </slot>
            </span>
          </button>
        </div>
      </div>
      <div v-if="!isMonthly" class="pricing14-container2">
        <div class="pricing14-column4 thq-card">
          <div class="pricing14-price16">
            <div class="pricing14-price17">
              <span class="pricing14-text131 thq-body-large">
                <slot name="plan11">
                  <!--Default content for plan11-->
                  <div class="pricing14-fragment12">
                    <span class="pricing14-text157">Basic plan</span>
                  </div>
                </slot>
              </span>
              <h3 class="pricing14-text132 thq-heading-3">
                <slot name="plan1Price1">
                  <!--Default content for plan1Price1-->
                  <div class="pricing14-fragment28">
                    <span class="pricing14-text173">$200/yr</span>
                  </div>
                </slot>
              </h3>
              <span class="thq-body-large">
                <slot name="plan1Yearly1">
                  <!--Default content for plan1Yearly1-->
                  <div class="pricing14-fragment47">
                    <span class="pricing14-text192">or $20 monthly</span>
                  </div>
                </slot>
              </span>
            </div>
            <div class="pricing14-list4">
              <div class="pricing14-list-item22">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan1Feature11">
                    <!--Default content for plan1Feature11-->
                    <div class="pricing14-fragment39">
                      <span class="pricing14-text184">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item23">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan1Feature21">
                    <!--Default content for plan1Feature21-->
                    <div class="pricing14-fragment40">
                      <span class="pricing14-text185">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item24">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan1Feature31">
                    <!--Default content for plan1Feature31-->
                    <div class="pricing14-fragment52">
                      <span class="pricing14-text197">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
            </div>
          </div>
          <button
            class="pricing14-button17 thq-button-outline thq-button-animated"
          >
            <span class="thq-body-small">
              <slot name="plan1Action1">
                <!--Default content for plan1Action1-->
                <div class="pricing14-fragment24">
                  <span class="pricing14-text169">Get started</span>
                </div>
              </slot>
            </span>
          </button>
        </div>
        <div class="pricing14-column5 thq-card">
          <div class="pricing14-price18">
            <div class="pricing14-price19">
              <span class="pricing14-text138 thq-body-large">
                <slot name="plan21">
                  <!--Default content for plan21-->
                  <div class="pricing14-fragment38">
                    <span class="pricing14-text183">Business plan</span>
                  </div>
                </slot>
              </span>
              <h3 class="pricing14-text139 thq-heading-3">
                <slot name="plan2Price1">
                  <!--Default content for plan2Price1-->
                  <div class="pricing14-fragment48">
                    <span class="pricing14-text193">$299/yr</span>
                  </div>
                </slot>
              </h3>
              <span class="thq-body-large">
                <slot name="plan2Yearly1">
                  <!--Default content for plan2Yearly1-->
                  <div class="pricing14-fragment42">
                    <span class="pricing14-text187">or $29 monthly</span>
                  </div>
                </slot>
              </span>
            </div>
            <div class="pricing14-list5">
              <div class="pricing14-list-item25">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan2Feature11">
                    <!--Default content for plan2Feature11-->
                    <div class="pricing14-fragment17">
                      <span class="pricing14-text162">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item26">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan2Feature21">
                    <!--Default content for plan2Feature21-->
                    <div class="pricing14-fragment30">
                      <span class="pricing14-text175">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item27">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan2Feature31">
                    <!--Default content for plan2Feature31-->
                    <div class="pricing14-fragment45">
                      <span class="pricing14-text190">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item28">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan2Feature41">
                    <!--Default content for plan2Feature41-->
                    <div class="pricing14-fragment19">
                      <span class="pricing14-text164">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
            </div>
          </div>
          <button
            class="pricing14-button18 thq-button-animated thq-button-filled"
          >
            <span class="thq-body-small">
              <slot name="plan2Action1">
                <!--Default content for plan2Action1-->
                <div class="pricing14-fragment31">
                  <span class="pricing14-text176">Get started</span>
                </div>
              </slot>
            </span>
          </button>
        </div>
        <div class="pricing14-column6 thq-card">
          <div class="pricing14-price20">
            <div class="pricing14-price21">
              <span class="pricing14-text146 thq-body-large">
                <slot name="plan31">
                  <!--Default content for plan31-->
                  <div class="pricing14-fragment14">
                    <span class="pricing14-text159">Enterprise plan</span>
                  </div>
                </slot>
              </span>
              <h3 class="pricing14-text147 thq-heading-3">
                <slot name="plan3Price1">
                  <!--Default content for plan3Price1-->
                  <div class="pricing14-fragment51">
                    <span class="pricing14-text196">$499/yr</span>
                  </div>
                </slot>
              </h3>
              <span class="thq-body-large">
                <slot name="plan3Yearly1">
                  <!--Default content for plan3Yearly1-->
                  <div class="pricing14-fragment44">
                    <span class="pricing14-text189">or $49 monthly</span>
                  </div>
                </slot>
              </span>
            </div>
            <div class="pricing14-list6">
              <div class="pricing14-list-item29">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan3Feature11">
                    <!--Default content for plan3Feature11-->
                    <div class="pricing14-fragment46">
                      <span class="pricing14-text191">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item30">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan3Feature21">
                    <!--Default content for plan3Feature21-->
                    <div class="pricing14-fragment21">
                      <span class="pricing14-text166">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item31">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan3Feature31">
                    <!--Default content for plan3Feature31-->
                    <div class="pricing14-fragment36">
                      <span class="pricing14-text181">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item32">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan3Feature41">
                    <!--Default content for plan3Feature41-->
                    <div class="pricing14-fragment15">
                      <span class="pricing14-text160">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
              <div class="pricing14-list-item33">
                <svg viewBox="0 0 1024 1024" class="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span class="thq-body-small">
                  <slot name="plan3Feature51">
                    <!--Default content for plan3Feature51-->
                    <div class="pricing14-fragment18">
                      <span class="pricing14-text163">
                        Feature text goes here
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
            </div>
          </div>
          <button
            class="pricing14-button19 thq-button-animated thq-button-filled"
          >
            <span class="thq-body-small">
              <slot name="plan3Action1">
                <!--Default content for plan3Action1-->
                <div class="pricing14-fragment58">
                  <span class="pricing14-text203">Get started</span>
                </div>
              </slot>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing14',
  props: {},
  data() {
    return {
      isMonthly: true,
      rawhf6q: ' ',
      rawo7ba: ' ',
    }
  },
}
</script>

<style scoped>
.pricing14-pricing23 {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.pricing14-max-width {
  gap: var(--dl-layout-space-threeunits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-section-title {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.pricing14-text100 {
  text-align: center;
}
 
.pricing14-content {
  gap: var(--dl-layout-space-oneandhalfunits);
  width: 100%;
  display: flex;
  max-width: 800px;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-text101 {
  text-align: center;
}
 
.pricing14-text102 {
  text-align: center;
}
 
.pricing14-tabs {
  display: flex;
  align-items: flex-start;
}
 
.pricing14-button10 {
  gap: var(--dl-layout-space-halfunit);
  color: var(--dl-color-theme-neutral-light);
  width: 120px;
  height: 60px;
  border-top-left-radius: var(--dl-layout-radius-buttonradius);
  border-top-right-radius: 0;
  border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
  border-bottom-right-radius: 0;
}
 
.pricing14-button11 {
  gap: var(--dl-layout-space-halfunit);
  width: 120px;
  height: 60px;
  border-style: solid;
  border-top-left-radius: var(--dl-layout-radius-buttonradius);
  border-top-right-radius: 0;
  border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
  border-bottom-right-radius: 0;
}
 
.pricing14-button12 {
  gap: var(--dl-layout-space-halfunit);
  color: var(--dl-color-theme-neutral-light);
  width: 120px;
  height: 60px;
  border-top-left-radius: 0;
  border-top-right-radius: var(--dl-layout-radius-buttonradius);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
}
 
.pricing14-button13 {
  gap: var(--dl-layout-space-halfunit);
  width: 120px;
  height: 60px;
  border-style: solid;
  border-top-left-radius: 0;
  border-top-right-radius: var(--dl-layout-radius-buttonradius);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
}
 
.pricing14-container1 {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.pricing14-column1 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
}
 
.pricing14-price10 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-price11 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-text107 {
  font-style: normal;
  font-weight: 600;
}
 
.pricing14-text108 {
  font-size: 48px;
}
 
.pricing14-list1 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.pricing14-list-item10 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item11 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item12 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-button14 {
  width: 100%;
}
 
.pricing14-column2 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent1);
}
 
.pricing14-price12 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-price13 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-text114 {
  font-style: normal;
  font-weight: 600;
}
 
.pricing14-text115 {
  font-size: 48px;
}
 
.pricing14-list2 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.pricing14-list-item13 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item14 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item15 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item16 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-button15 {
  width: 100%;
}
 
.pricing14-column3 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent2);
}
 
.pricing14-price14 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-price15 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-text122 {
  font-style: normal;
  font-weight: 600;
}
 
.pricing14-text123 {
  font-size: 48px;
}
 
.pricing14-list3 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.pricing14-list-item17 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item18 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item19 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item20 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item21 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-button16 {
  width: 100%;
}
 
.pricing14-container2 {
  gap: 32px;
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.pricing14-column4 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
}
 
.pricing14-price16 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-price17 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-text131 {
  font-style: normal;
  font-weight: 600;
}
 
.pricing14-text132 {
  font-size: 48px;
}
 
.pricing14-list4 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.pricing14-list-item22 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item23 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item24 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-button17 {
  width: 100%;
}
 
.pricing14-column5 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent1);
}
 
.pricing14-price18 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-price19 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-text138 {
  font-style: normal;
  font-weight: 600;
}
 
.pricing14-text139 {
  font-size: 48px;
}
 
.pricing14-list5 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.pricing14-list-item25 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item26 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item27 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item28 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-button18 {
  width: 100%;
}
 
.pricing14-column6 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-color: var(--dl-color-theme-neutral-dark);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-theme-accent2);
}
 
.pricing14-price20 {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-price21 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.pricing14-text146 {
  font-style: normal;
  font-weight: 600;
}
 
.pricing14-text147 {
  font-size: 48px;
}
 
.pricing14-list6 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.pricing14-list-item29 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item30 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item31 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item32 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-list-item33 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.pricing14-button19 {
  width: 100%;
}
 
.pricing14-fragment10 {
  display: contents;
}
 
.pricing14-text155 {
  display: inline-block;
}
 
.pricing14-fragment11 {
  display: contents;
}
 
.pricing14-text156 {
  display: inline-block;
}
 
.pricing14-fragment12 {
  display: contents;
}
 
.pricing14-text157 {
  display: inline-block;
}
 
.pricing14-fragment13 {
  display: contents;
}
 
.pricing14-text158 {
  display: inline-block;
}
 
.pricing14-fragment14 {
  display: contents;
}
 
.pricing14-text159 {
  display: inline-block;
}
 
.pricing14-fragment15 {
  display: contents;
}
 
.pricing14-text160 {
  display: inline-block;
}
 
.pricing14-fragment16 {
  display: contents;
}
 
.pricing14-text161 {
  display: inline-block;
}
 
.pricing14-fragment17 {
  display: contents;
}
 
.pricing14-text162 {
  display: inline-block;
}
 
.pricing14-fragment18 {
  display: contents;
}
 
.pricing14-text163 {
  display: inline-block;
}
 
.pricing14-fragment19 {
  display: contents;
}
 
.pricing14-text164 {
  display: inline-block;
}
 
.pricing14-fragment20 {
  display: contents;
}
 
.pricing14-text165 {
  display: inline-block;
}
 
.pricing14-fragment21 {
  display: contents;
}
 
.pricing14-text166 {
  display: inline-block;
}
 
.pricing14-fragment22 {
  display: contents;
}
 
.pricing14-text167 {
  display: inline-block;
}
 
.pricing14-fragment23 {
  display: contents;
}
 
.pricing14-text168 {
  display: inline-block;
}
 
.pricing14-fragment24 {
  display: contents;
}
 
.pricing14-text169 {
  display: inline-block;
}
 
.pricing14-fragment25 {
  display: contents;
}
 
.pricing14-text170 {
  display: inline-block;
}
 
.pricing14-fragment26 {
  display: contents;
}
 
.pricing14-text171 {
  display: inline-block;
}
 
.pricing14-fragment27 {
  display: contents;
}
 
.pricing14-text172 {
  display: inline-block;
}
 
.pricing14-fragment28 {
  display: contents;
}
 
.pricing14-text173 {
  display: inline-block;
}
 
.pricing14-fragment29 {
  display: contents;
}
 
.pricing14-text174 {
  display: inline-block;
}
 
.pricing14-fragment30 {
  display: contents;
}
 
.pricing14-text175 {
  display: inline-block;
}
 
.pricing14-fragment31 {
  display: contents;
}
 
.pricing14-text176 {
  display: inline-block;
}
 
.pricing14-fragment32 {
  display: contents;
}
 
.pricing14-text177 {
  display: inline-block;
}
 
.pricing14-fragment33 {
  display: contents;
}
 
.pricing14-text178 {
  display: inline-block;
}
 
.pricing14-fragment34 {
  display: contents;
}
 
.pricing14-text179 {
  display: inline-block;
}
 
.pricing14-fragment35 {
  display: contents;
}
 
.pricing14-text180 {
  display: inline-block;
}
 
.pricing14-fragment36 {
  display: contents;
}
 
.pricing14-text181 {
  display: inline-block;
}
 
.pricing14-fragment37 {
  display: contents;
}
 
.pricing14-text182 {
  display: inline-block;
}
 
.pricing14-fragment38 {
  display: contents;
}
 
.pricing14-text183 {
  display: inline-block;
}
 
.pricing14-fragment39 {
  display: contents;
}
 
.pricing14-text184 {
  display: inline-block;
}
 
.pricing14-fragment40 {
  display: contents;
}
 
.pricing14-text185 {
  display: inline-block;
}
 
.pricing14-fragment41 {
  display: contents;
}
 
.pricing14-text186 {
  display: inline-block;
}
 
.pricing14-fragment42 {
  display: contents;
}
 
.pricing14-text187 {
  display: inline-block;
}
 
.pricing14-fragment43 {
  display: contents;
}
 
.pricing14-text188 {
  display: inline-block;
}
 
.pricing14-fragment44 {
  display: contents;
}
 
.pricing14-text189 {
  display: inline-block;
}
 
.pricing14-fragment45 {
  display: contents;
}
 
.pricing14-text190 {
  display: inline-block;
}
 
.pricing14-fragment46 {
  display: contents;
}
 
.pricing14-text191 {
  display: inline-block;
}
 
.pricing14-fragment47 {
  display: contents;
}
 
.pricing14-text192 {
  display: inline-block;
}
 
.pricing14-fragment48 {
  display: contents;
}
 
.pricing14-text193 {
  display: inline-block;
}
 
.pricing14-fragment49 {
  display: contents;
}
 
.pricing14-text194 {
  display: inline-block;
}
 
.pricing14-fragment50 {
  display: contents;
}
 
.pricing14-text195 {
  display: inline-block;
}
 
.pricing14-fragment51 {
  display: contents;
}
 
.pricing14-text196 {
  display: inline-block;
}
 
.pricing14-fragment52 {
  display: contents;
}
 
.pricing14-text197 {
  display: inline-block;
}
 
.pricing14-fragment53 {
  display: contents;
}
 
.pricing14-text198 {
  display: inline-block;
}
 
.pricing14-fragment54 {
  display: contents;
}
 
.pricing14-text199 {
  display: inline-block;
}
 
.pricing14-fragment55 {
  display: contents;
}
 
.pricing14-text200 {
  display: inline-block;
}
 
.pricing14-fragment56 {
  display: contents;
}
 
.pricing14-text201 {
  display: inline-block;
}
 
.pricing14-fragment57 {
  display: contents;
}
 
.pricing14-text202 {
  display: inline-block;
}
 
.pricing14-fragment58 {
  display: contents;
}
 
.pricing14-text203 {
  display: inline-block;
}
 
.pricing14-fragment59 {
  display: contents;
}
 
.pricing14-text204 {
  display: inline-block;
}
 
.pricing14-fragment60 {
  display: contents;
}
 
.pricing14-text205 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .pricing14-container1 {
    flex-direction: column;
  }
  .pricing14-column3 {
    width: 100%;
  }
  .pricing14-container2 {
    flex-direction: column;
  }
  .pricing14-column6 {
    width: 100%;
  }
}
 
@media(max-width: 479px) {
  .pricing14-max-width {
    gap: var(--dl-layout-space-oneandhalfunits);
  }
}
</style>
