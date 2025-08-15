import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import leTruc from '@/views/trucPage.vue'; 

describe('leTruc', () => {
  beforeEach(() => {
    
    vi.useFakeTimers();
    
  });

  afterEach(() => {
   
    vi.useRealTimers();
  });

  

  it('change le texte après chaque seconde lorsque le bouton est cliqué', async () => {
  
    const wrapper = mount(leTruc);

 
    expect(wrapper.find('.affichage').text()).toBe('salut');

    expect(wrapper.find('.time').text()).toBe('');

  
    await wrapper.find('#leBouton').trigger('click');


  });
});
