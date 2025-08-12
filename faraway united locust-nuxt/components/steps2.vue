<template>
  <div class="steps2-container1 thq-section-padding">
    <div class="steps2-max-width thq-section-max-width">
      <div class="steps2-container2 thq-grid-2">
        <div class="steps2-section-header">
          <h2 class="thq-heading-2">Discover the Power of Our Products</h2>
          <p class="thq-body-large">
            Experience innovation and quality like never before. Our products are
            designed to deliver exceptional performance, reliability, and value.
            Whether you’re looking for everyday solutions or advanced features, we
            have exactly what you need to make life easier and better.
          </p>
          <div class="steps2-actions">
            <button class="thq-button-animated thq-button-filled steps2-button">
              <span class="thq-body-small">Main action</span>
            </button>
          </div>
        </div>
        <div class="steps2-container3">
          <div class="steps2-container4 thq-card">
            <h2 class="thq-heading-2">
              <slot name="step1Title">
                <!--Default content for step1Title-->
                <div class="steps2-fragment5">
                  <span class="steps2-text29">
                    Sign up on Swasth Saarthi platform
                  </span>
                </div>
              </slot>
            </h2>
            <span class="steps2-text14 thq-body-small">
              <slot name="step1Description">
                <!--Default content for step1Description-->
                <div class="steps2-fragment1">
                  <span class="steps2-text25">
                    Create an account using your mobile number and basic details
                    to access our telehealth services.
                  </span>
                </div>
              </slot>
            </span>
            <label class="steps2-text15 thq-heading-3">01</label>
          </div>
          <div class="steps2-container5 thq-card">
            <h2 class="thq-heading-2">
              <slot name="step2Title">
                <!--Default content for step2Title-->
                <div class="steps2-fragment3">
                  <span class="steps2-text27">Use AI symptom checker</span>
                </div>
              </slot>
            </h2>
            <span class="steps2-text17 thq-body-small">
              <slot name="step2Description">
                <!--Default content for step2Description-->
                <div class="steps2-fragment4">
                  <span class="steps2-text28">
                    Describe your symptoms to the AI-powered tool to receive
                    preliminary health assessments.
                  </span>
                </div>
              </slot>
            </span>
            <label class="steps2-text18 thq-heading-3">02</label>
          </div>
          <div class="steps2-container6 thq-card">
            <h2 class="thq-heading-2">
              <slot name="step3Title">
                <!--Default content for step3Title-->
                <div class="steps2-fragment6">
                  <span class="steps2-text30">
                    Schedule a telemedicine consultation
                  </span>
                </div>
              </slot>
            </h2>
            <span class="steps2-text20 thq-body-small">
              <slot name="step3Description">
                <!--Default content for step3Description-->
                <div class="steps2-fragment2">
                  <span class="steps2-text26">
                    Book a virtual appointment with a healthcare provider for a
                    detailed diagnosis and treatment plan.
                  </span>
                </div>
              </slot>
            </span>
            <label class="steps2-text21 thq-heading-3">03</label>
          </div>
          <div class="steps2-container7 thq-card">
            <h2 class="thq-heading-2">
              <slot name="step4Title">
                <!--Default content for step4Title-->
                <div class="steps2-fragment8">
                  <span class="steps2-text32">Receive medicine delivery</span>
                </div>
              </slot>
            </h2>
            <span class="steps2-text23 thq-body-small">
              <slot name="step4Description">
                <!--Default content for step4Description-->
                <div class="steps2-fragment7">
                  <span class="steps2-text31">
                    Get your prescribed medications delivered to your doorstep for
                    convenience and timely treatment.
                  </span>
                </div>
              </slot>
            </span>
            <label class="steps2-text24 thq-heading-3">04</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps2',
  props: {},
}
</script>

<style scoped>
.steps2-container1 {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
 
.steps2-max-width {
  gap: var(--dl-layout-space-fourunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
 
.steps2-container2 {
  align-items: start;
}
 
.steps2-section-header {
  gap: var(--dl-layout-space-oneandhalfunits);
  top: 10%;
  display: flex;
  position: sticky;
  align-items: flex-start;
  flex-direction: column;
}
 
.steps2-actions {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.steps2-container3 {
  grid-area: span 1/span 1/span 1/span 1;
}
 
.steps2-container4 {
  top: 10%;
  position: sticky;
  transform: rotate(-2deg);
  margin-bottom: var(--dl-layout-space-twounits);
  background-color: var(--dl-color-theme-accent1);
}
 
.steps2-text14 {
  text-align: center;
}
 
.steps2-text15 {
  top: var(--dl-layout-space-unit);
  right: var(--dl-layout-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
 
.steps2-container5 {
  top: 10%;
  position: sticky;
  transform: rotate(2deg);
  margin-bottom: var(--dl-layout-space-twounits);
  background-color: var(--dl-color-theme-accent2);
}
 
.steps2-text17 {
  text-align: center;
}
 
.steps2-text18 {
  top: var(--dl-layout-space-unit);
  right: var(--dl-layout-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
 
.steps2-container6 {
  top: 10%;
  position: sticky;
  transform: rotate(-2deg);
  margin-bottom: var(--dl-layout-space-twounits);
  background-color: var(--dl-color-theme-accent1);
}
 
.steps2-text20 {
  text-align: center;
}
 
.steps2-text21 {
  top: var(--dl-layout-space-unit);
  right: var(--dl-layout-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
 
.steps2-container7 {
  top: 10%;
  position: sticky;
  transform: rotate(2deg);
  background-color: var(--dl-color-theme-accent2);
}
 
.steps2-text23 {
  text-align: center;
}
 
.steps2-text24 {
  top: var(--dl-layout-space-unit);
  right: var(--dl-layout-space-unit);
  position: absolute;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
}
 
.steps2-fragment1 {
  display: contents;
}
 
.steps2-text25 {
  display: inline-block;
}
 
.steps2-fragment2 {
  display: contents;
}
 
.steps2-text26 {
  display: inline-block;
}
 
.steps2-fragment3 {
  display: contents;
}
 
.steps2-text27 {
  display: inline-block;
}
 
.steps2-fragment4 {
  display: contents;
}
 
.steps2-text28 {
  display: inline-block;
}
 
.steps2-fragment5 {
  display: contents;
}
 
.steps2-text29 {
  display: inline-block;
}
 
.steps2-fragment6 {
  display: contents;
}
 
.steps2-text30 {
  display: inline-block;
}
 
.steps2-fragment7 {
  display: contents;
}
 
.steps2-text31 {
  display: inline-block;
}
 
.steps2-fragment8 {
  display: contents;
}
 
.steps2-text32 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .steps2-max-width {
    flex-direction: column;
  }
}
 
@media(max-width: 767px) {
  .steps2-section-header {
    position: static;
    margin-bottom: var(--dl-layout-space-twounits);
  }
  .steps2-actions {
    width: 100%;
    align-self: flex-start;
  }
  .steps2-container4 {
    width: 100%;
  }
  .steps2-container5 {
    width: 100%;
  }
  .steps2-container6 {
    width: 100%;
  }
  .steps2-container7 {
    width: 100%;
  }
}
 
@media(max-width: 479px) {
  .steps2-button {
    width: 100%;
  }
}
</style>
