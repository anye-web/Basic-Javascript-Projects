"use strict";

// Ui Element
const form = document.querySelector(".lorem-form");
const inputAmount = document.querySelector("#amount");
const result = document.querySelector(".lorem-text");

const text = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas. Arcu dictum varius duis at. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Non nisi est sit amet facilisis. Eget velit aliquet sagittis id consectetur. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Etiam erat velit scelerisque in dictum. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Ac placerat vestibulum lectus mauris ultrices. Quis enim lobortis scelerisque fermentum dui faucibus.`,

  `Vulputate eu scelerisque felis imperdiet proin fermentum. Vulputate odio ut enim blandit volutpat maecenas. Quisque id diam vel quam elementum pulvinar. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Sodales ut etiam sit amet nisl purus. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Varius sit amet mattis vulputate enim. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Lacinia quis vel eros donec. Varius quam quisque id diam. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.
`,
  `A diam maecenas sed enim ut sem viverra aliquet. A condimentum vitae sapien pellentesque. Varius morbi enim nunc faucibus a pellentesque. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Et sollicitudin ac orci phasellus. Habitasse platea dictumst vestibulum rhoncus est. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Scelerisque viverra mauris in aliquam sem. Odio euismod lacinia at quis risus sed vulputate odio. Gravida in fermentum et sollicitudin. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Risus quis varius quam quisque. Consectetur lorem donec massa sapien faucibus et. Quam id leo in vitae turpis. Scelerisque varius morbi enim nunc.`,

  `Nunc scelerisque viverra mauris in aliquam sem. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Vel quam elementum pulvinar etiam. Pellentesque nec nam aliquam sem et tortor consequat id. Eleifend donec pretium vulputate sapien. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Augue eget arcu dictum varius duis at. Sit amet mattis vulputate enim nulla. Consectetur libero id faucibus nisl tincidunt eget. Urna nunc id cursus metus aliquam. Id venenatis a condimentum vitae sapien pellentesque habitant. A diam sollicitudin tempor id eu nisl. Imperdiet proin fermentum leo vel orci. Elit duis tristique sollicitudin nibh sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin.`,

  `Sed velit dignissim sodales ut eu sem. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Lobortis mattis aliquam faucibus purus in. Turpis nunc eget lorem dolor sed viverra ipsum. Libero id faucibus nisl tincidunt eget nullam non. Urna nunc id cursus metus aliquam. Commodo nulla facilisi nullam vehicula ipsum a arcu. Elit at imperdiet dui accumsan sit amet nulla. Nunc congue nisi vitae suscipit tellus. Integer enim neque volutpat ac tincidunt vitae semper quis. Odio euismod lacinia at quis risus sed vulputate odio. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Vitae auctor eu augue ut lectus arcu bibendum at varius. Ut sem nulla pharetra diam sit amet nisl. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Lectus quam id leo in vitae turpis massa. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.`,

  `A diam maecenas sed enim. A cras semper auctor neque vitae tempus quam pellentesque. Praesent elementum facilisis leo vel fringilla est. Nunc sed augue lacus viverra vitae congue eu consequat. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Vel risus commodo viverra maecenas accumsan lacus. Diam vel quam elementum pulvinar etiam non quam. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Rhoncus est pellentesque elit ullamcorper. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Augue neque gravida in fermentum et.`,

  `Sed egestas egestas fringilla phasellus faucibus scelerisque. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Diam ut venenatis tellus in metus vulputate. Mauris sit amet massa vitae tortor. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Mattis ullamcorper velit sed ullamcorper. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Quam lacus suspendisse faucibus interdum. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Massa tempor nec feugiat nisl pretium fusce id velit. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu.
`,
  `Semper eget duis at tellus at urna condimentum. Pharetra diam sit amet nisl. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Risus nec feugiat in fermentum posuere. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Sapien eget mi proin sed libero enim sed faucibus turpis. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Maecenas accumsan lacus vel facilisis. At varius vel pharetra vel turpis nunc eget lorem. In vitae turpis massa sed elementum tempus. Feugiat vivamus at augue eget arcu. Ut tellus elementum sagittis vitae et leo duis. Lacus vestibulum sed arcu non odio euismod.
`,
  `Enim praesent elementum facilisis leo vel fringilla est ullamcorper. In iaculis nunc sed augue lacus viverra vitae congue. Proin fermentum leo vel orci. Pretium nibh ipsum consequat nisl vel pretium lectus. Risus sed vulputate odio ut enim. Sed viverra tellus in hac. Habitasse platea dictumst quisque sagittis purus sit amet. Tristique senectus et netus et malesuada fames ac. Ullamcorper a lacus vestibulum sed. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Viverra nam libero justo laoreet. Nunc scelerisque viverra mauris in aliquam. Id interdum velit laoreet id donec ultrices tincidunt arcu. Eu non diam phasellus vestibulum lorem sed. Turpis massa tincidunt dui ut ornare lectus. Elit ullamcorper dignissim cras tincidunt lobortis.`,
];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = parseInt(inputAmount.value);
  const randNum = Math.floor(Math.random() * text.length);

  // Empty
  // -1
  // > 9

  if (isNaN(value) || value <= 0 || value > 9) {
    result.innerHTML = `<p class="text">${text[randNum]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map((item) => {
        return `<p class="text">${item}</p>`;
      })
      .join("");

    result.innerHTML = tempText;
  }
});
