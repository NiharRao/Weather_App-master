import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView > renderSymbol', () => {

  it('returns \'°C\' when the keyword \'temp\' is passed', () => {
    const text = 'temp';
    const wrapper = shallowMount(HomeView, {
      propsData: { text }
    })
    const result = wrapper.vm.renderSymbol(text);
    expect(result).toEqual('°C');
  }),

  it('returns \'°C\' when the keyword \'feels\' is passed', () => {
    const text = 'feels';
    const wrapper = shallowMount(HomeView, {
      propsData: { text }
    })
    const result = wrapper.vm.renderSymbol(text);
    expect(result).toEqual('°C');
  }),

  it('returns \'hPa\' when the keyword \'pressure\' is passed', () => {
    const text = 'pressure';
    const wrapper = shallowMount(HomeView, {
      propsData: { text }
    })
    const result = wrapper.vm.renderSymbol(text);
    expect(result).toEqual('hPa');
  }),

  it('returns \'%\' when the keyword \'humidity\' is passed', () => {
    const text = 'humidity';
    const wrapper = shallowMount(HomeView, {
      propsData: { text }
    })
    const result = wrapper.vm.renderSymbol(text);
    expect(result).toEqual('%');
  }),

  it('returns \'m\' when the keyword \'level\' is passed', () => {
    const text = 'level';
    const wrapper = shallowMount(HomeView, {
      propsData: { text }
    })
    const result = wrapper.vm.renderSymbol(text);
    expect(result).toEqual('m');
  }),

  it('returns \'\' when no keyword is passed', () => {
    const text = '';
    const wrapper = shallowMount(HomeView, {
      propsData: { text }
    })
    const result = wrapper.vm.renderSymbol(text);
    expect(result).toEqual('');
  })

  it('returns \'\' when an unknown keyword is passed', () => {
    const text = 'G#$%Y';
    const wrapper = shallowMount(HomeView, {
      propsData: { text }
    })
    const result = wrapper.vm.renderSymbol(text);
    expect(result).toEqual('');
  })
}),

describe('HomeView > parseText', () => {
  it('replaces \'_\' with \' \' in any given text', () => {
    const text = "tes t_te st";
    const wrapper = shallowMount(HomeView, {
      propsData: { text }
    })
    const result = wrapper.vm.parseText(text);
    expect(result).not.toContain("_");
  })
}),

describe('HomeView > getCurrentWeather', () => {
  it('returns weatherdata when a city is selected', () => {
    const val = {
      lat: 43.7001,
      lon: -79.4163
    }
    const wrapper = shallowMount(HomeView, {
      propsData: { val }
    })
    wrapper.vm.getCurrentWeather(val);
    expect(wrapper.find('.weatherData')).not.toBe(null);
  })
})
