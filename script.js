function copyPreviousPrompt(button){
  const pre = button.closest('.article-section, .prompt-card')?.querySelector('pre');
  if(!pre) return;
  navigator.clipboard.writeText(pre.innerText).then(()=>{
    const old = button.innerText; button.innerText='Copied'; setTimeout(()=>button.innerText=old,1200);
  });
}
