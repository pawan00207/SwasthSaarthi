<template>
  <div class="thq-section-padding">
    <div class="thq-section-max-width">
      <div class="cta26-accent2-bg">
        <div class="cta26-accent1-bg">
          <div class="cta26-container2">
            <div class="cta26-content">
              <span class="thq-heading-2">
                <slot name="heading1">
                  <!--Default content for heading1-->
                  <div class="cta26-fragment1">
                    <span class="cta26-text4">Join Swasth Saarthi today!</span>
                  </div>
                </slot>
              </span>
              <p class="thq-body-large">
                <slot name="content1">
                  <!--Default content for content1-->
                  <div class="cta26-fragment2">
                    <span class="cta26-text5">
                      Experience accessible and affordable healthcare at your
                      fingertips.
                    </span>
                  </div>
                </slot>
              </p>
            </div>
            <div class="cta26-actions">
              <button type="button" class="thq-button-filled cta26-button">
                <span>
                  <slot name="action1">
                    <!--Default content for action1-->
                    <div class="cta26-fragment3">
                      <span class="cta26-text6">Sign up now</span>
                    </div>
                  </slot>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTA26',
  props: {},
}
</script>

<style scoped>
.cta26-accent2-bg {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
  align-self: stretch;
  transition: 0.3s;
  align-items: center;
  border-radius: var(--dl-layout-radius-cardradius);
  justify-content: space-between;
  transform-style: preserve-3d;
  background-color: var(--dl-color-theme-accent2);
}
 
.cta26-accent2-bg:hover {
  transform: scale3d(1.1,1.1,1.1);
}
 
.cta26-accent1-bg {
  width: 100%;
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
  align-items: center;
  border-radius: var(--dl-layout-radius-cardradius);
  justify-content: space-between;
  transform-style: preserve-3d;
  background-color: var(--dl-color-theme-accent1);
}
 
.cta26-container2 {
  gap: var(--dl-layout-space-threeunits);
  width: 100%;
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-layout-space-sixunits);
  padding-left: var(--dl-layout-space-fourunits);
  border-radius: var(--dl-layout-radius-cardradius);
  padding-right: var(--dl-layout-space-fourunits);
  padding-bottom: var(--dl-layout-space-sixunits);
}
 
.cta26-container2:hover {
  color: var(--dl-color-theme-neutral-light);
  background-color: var(--dl-color-theme-neutral-dark);
}
 
.cta26-content {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.cta26-actions {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.cta26-fragment1 {
  display: contents;
}
 
.cta26-text4 {
  display: inline-block;
}
 
.cta26-fragment2 {
  display: contents;
}
 
.cta26-text5 {
  display: inline-block;
}
 
.cta26-fragment3 {
  display: contents;
}
 
.cta26-text6 {
  display: inline-block;
}
 
@media(max-width: 767px) {
  .cta26-container2 {
    gap: var(--dl-layout-space-oneandhalfunits);
    flex-direction: column;
    justify-content: flex-start;
  }
}
 
@media(max-width: 479px) {
  .cta26-actions {
    flex-wrap: wrap;
    align-self: stretch;
    justify-content: center;
  }
  .cta26-button {
    flex: 1;
  }
}
</style>
