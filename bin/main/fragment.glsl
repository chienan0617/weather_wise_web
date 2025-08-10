#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_texture;
uniform vec3 u_lightDirection; // 已 normalize
uniform vec4 u_ambientColor;
uniform vec4 u_diffuseColor;

varying vec4 vColor;
varying vec2 vTexCoord;
varying vec3 vNormal;

void main(){
    vec3 norm = normalize(vNormal);
    float diff = max(dot(norm, -u_lightDirection), 0.0);
    vec4 tex = texture2D(u_texture, vTexCoord);
    vec3 lighting = u_ambientColor.rgb + u_diffuseColor.rgb * diff;
    vec3 finalRGB = lighting * tex.rgb * vColor.rgb;
    gl_FragColor = vec4(finalRGB, tex.a * vColor.a);
}
