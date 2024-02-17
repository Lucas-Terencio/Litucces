function x(a,q,w){
    console.log(`${a} ${q} ${w}`);
    return function(b,c){
        return x(a,b,c)
    }
}

x('hoje', 'amanha', 'sempre')
('nunca','jamais')
('dia','noite')
('manha','tarde')
console.log({
    "":"a",
    "":"b"
});